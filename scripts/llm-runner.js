#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'

const OUTDIR = 'outputs/llm-responses'
const APPLY_DIR = 'outputs/apply-commands'

function sleep(ms){ return new Promise(r=>setTimeout(r, ms)) }

async function main(){
  const envPath = './.env.test'
  try{
    await fs.access(envPath)
    const env = await fs.readFile(envPath,'utf8')
    env.split(/\n/).forEach(line=>{
      const m = line.match(/^\s*([A-Z0-9_]+)=(.*)$/)
      if(m) process.env[m[1]] = m[2]
    })
  }catch(e){}

  const apiKey = process.env.ANTHROPIC_API_KEY
  const model = process.env.ANTHROPIC_MODEL || 'claude-2'
  const anthroVersion = process.env.ANTHROPIC_VERSION || '2023-10-24'
  if(!apiKey){
    console.error('Missing ANTHROPIC_API_KEY in environment or .env.test; aborting.')
    process.exit(2)
  }

  await fs.mkdir(OUTDIR, { recursive: true })
  await fs.mkdir(APPLY_DIR, { recursive: true })

  const files = (await fs.readdir('/tmp')).filter(f=>f.startsWith('prompts-') && f.endsWith('.json'))
  if(files.length===0){
    console.error('No prompt files found in /tmp (expected /tmp/prompts-<projectId>-<goal>.json).')
    process.exit(1)
  }

  for(const f of files){
    try{
      const p = path.join('/tmp', f)
      const content = await fs.readFile(p, 'utf8')
      let parsed
      try{ parsed = JSON.parse(content) }catch(e){ parsed = {prompt: content} }
      const promptText = parsed.prompt || JSON.stringify(parsed, null, 2)

      console.log('Calling Anthropic for', f)
      const body = {
        model,
        prompt: `\n\nHuman: ${promptText}\n\nAssistant:`,
        max_tokens: 800,
        temperature: 0.2,
      }

      // retry logic for transient network errors / rate limits
      const maxRetries = 5
      let attempt = 0
      let res, dataText, jsonData
      while(attempt < maxRetries){
        try{
          res = await fetch('https://api.anthropic.com/v1/complete', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey,
              'anthropic-version': anthroVersion,
            },
            body: JSON.stringify(body),
          })

          dataText = await res.text()
          try{ jsonData = JSON.parse(dataText) }catch(e){ jsonData = null }

          if(res.ok) break
          // non-ok responses: may be rate limit or invalid key
          console.error('Non-OK response from Anthropic:', res.status, dataText)
          if(res.status >= 400 && res.status < 500) break
        }catch(e){
          console.error('Fetch error:', e && e.code ? e.code : e.message || e)
        }

        attempt++
        const backoff = Math.min(1000 * 2 ** attempt, 30000)
        console.log(`Retrying in ${backoff}ms (attempt ${attempt}/${maxRetries})`)
        await sleep(backoff)
      }

      if(!res){
        console.error('Failed to get a response from Anthropic after retries for', f)
        continue
      }

      const outPath = path.join(OUTDIR, f + '.response.txt')
      await fs.writeFile(outPath, dataText || '', 'utf8')

      // extract textual completion
      const completion = (jsonData && (jsonData.completion || jsonData.completion_text || jsonData.text)) || dataText || ''

      // try to extract an apply_cli command from completion
      const m = completion.match(/apply_cli\s*[:=]\s*`([^`]*)`/i) || completion.match(/apply_cli\s*[:=]\s*"([^"]*)"/i) || completion.match(/apply_cli\s*[:=]\s*(.+)/i)
      if(m){
        const cmd = m[1].trim()
        const applyPath = path.join(APPLY_DIR, f + '.sh')
        await fs.writeFile(applyPath, '#!/usr/bin/env bash\nset -euo pipefail\n\n# Suggested command from LLM\n' + cmd + '\n', 'utf8')
        await fs.chmod(applyPath, 0o750)
        console.log('Saved apply command to', applyPath)
      }

      console.log('Saved response to', outPath)
    }catch(err){
      console.error('Error processing', f, err)
    }
  }
}

main().catch(err=>{ console.error(err); process.exit(1) })
