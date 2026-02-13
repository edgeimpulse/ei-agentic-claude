#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'

async function loadEnv(envPath = './.env.test'){
  try{
    const data = await fs.readFile(envPath, 'utf8')
    data.split(/\n/).forEach(line=>{
      const m = line.match(/^\s*([A-Z0-9_]+)=(.*)$/)
      if(m) process.env[m[1]] = m[2]
    })
  }catch(e){}
}

async function main(){
  await loadEnv()

  const apiKey = process.env.EI_API_KEY
  if(!apiKey){
    console.error('Missing EI_API_KEY in environment or .env.test; aborting.')
    process.exit(2)
  }

  const outDir = 'config'
  await fs.mkdir(outDir, { recursive: true })

  console.log('Fetching projects from Edge Impulse...')
  const url = 'https://studio.edgeimpulse.com/v1/api/projects'
  const res = await fetch(url, { headers: { 'x-api-key': apiKey, 'Content-Type': 'application/json' } })
  const txt = await res.text()
  if(!res.ok){
    console.error('Edge Impulse API returned', res.status)
    try{ console.error(JSON.parse(txt)) }catch(e){ console.error(txt) }
    process.exit(3)
  }

  let data
  try{ data = JSON.parse(txt) }catch(e){
    console.error('Failed to parse response JSON')
    console.error(txt)
    process.exit(4)
  }

  const outPath = path.join(outDir, 'projects.json')
  await fs.writeFile(outPath, JSON.stringify(data, null, 2), 'utf8')
  console.log(`Wrote ${Object.keys(data).length ? 'projects object' : 'response'} to ${outPath}`)

  if(Array.isArray(data.projects)){
    console.log(`Found ${data.projects.length} projects; sample:`)
    console.log(data.projects.slice(0,5).map(p=>({ id: p.id || p.projectId || p._id, name: p.name || p.title })).slice(0,5))
  }

  console.log('Configuration write complete. Inspect config/projects.json for details.')
}

main().catch(err=>{ console.error(err); process.exit(1) })
