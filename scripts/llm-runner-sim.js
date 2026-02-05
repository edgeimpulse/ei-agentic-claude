#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'

const OUTDIR = 'outputs/llm-responses'
const APPLY_DIR = 'outputs/apply-commands'

async function main(){
  await fs.mkdir(OUTDIR, { recursive: true })
  await fs.mkdir(APPLY_DIR, { recursive: true })

  const files = (await fs.readdir('/tmp')).filter(f=>f.startsWith('prompts-') && f.endsWith('.json'))
  if(files.length===0){
    console.error('No prompt files found in /tmp to simulate')
    process.exit(1)
  }

  for(const f of files){
    try{
      const p = path.join('/tmp', f)
      const content = await fs.readFile(p, 'utf8')
      let parsed
      try{ parsed = JSON.parse(content) }catch(e){ parsed = {prompt: content} }

      // derive projectId from filename: prompts-<projectId>-<goal>.json
      const m = f.match(/^prompts-(.+?)-/) || []
      const projectId = m[1] || 'unknown'

      const simulated = {
        simulated: true,
        projectId,
        promptSnippet: (parsed.prompt||'').slice(0,200),
        recommendation: 'Adjust Keras block parameters to increase trainingCycles and reduce learningRate',
      }

      const completionText = `SIMULATED LLM RESPONSE\nRecommendation: ${simulated.recommendation}\n\napply_cli: \`npm run cli -- train-model-keras --api-key $EI_API_KEY --params '{"projectId":"${projectId}","learnId":"<learnId>","trainingCycles":50,"learningRate":0.005}'\`\n`

      const outPath = path.join(OUTDIR, f + '.response.txt')
      await fs.writeFile(outPath, completionText, 'utf8')

      const applyPath = path.join(APPLY_DIR, f + '.sh')
      const script = '#!/usr/bin/env bash\nset -euo pipefail\n\n# Simulated apply script from LLM\n' + `echo "Would run: npm run cli -- train-model-keras --api-key $EI_API_KEY --params '{\\"projectId\\":\\"${projectId}\\",\\"learnId\\":\\"<learnId>\\",\\"trainingCycles\\":50,\\"learningRate\\":0.005}'"\n`
      await fs.writeFile(applyPath, script, 'utf8')
      await fs.chmod(applyPath, 0o750)

      console.log('Simulated response saved to', outPath)
      console.log('Simulated apply script saved to', applyPath)
    }catch(err){
      console.error('Error simulating for', f, err)
    }
  }
}

main().catch(err=>{ console.error(err); process.exit(1) })
