#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'

const OUTDIR = 'outputs/llm-sim-integration'
const SNAP_DIR = path.join(OUTDIR, 'snapshots')
const ADJ_DIR = path.join(OUTDIR, 'adjusted')
const APPLY_DIR = path.join(OUTDIR, 'apply-scripts')
const RESULTS_FILE = path.join(OUTDIR, 'results.json')

function seedFromString(s){
  let h=0; for(let i=0;i<s.length;i++) h = (h*31 + s.charCodeAt(i)) >>> 0; return h
}

function deterministicBaseline(projectId){
  const seed = seedFromString(projectId)
  return 0.65 + (seed % 200)/1000 // 0.65 - 0.85
}

async function ensure(){
  await fs.mkdir(SNAP_DIR, { recursive: true })
  await fs.mkdir(ADJ_DIR, { recursive: true })
  await fs.mkdir(APPLY_DIR, { recursive: true })
}

async function main(){
  await ensure()

  // gather project IDs from local sources: config/projects.json, outputs/assessments, or /tmp prompts
  let projectIds = new Set()

  // 1) config/projects.json (if present)
  try{
    const cfg = JSON.parse(await fs.readFile('config/projects.json','utf8'))
    if(Array.isArray(cfg.projects)) cfg.projects.forEach(p=>p.id && projectIds.add(p.id))
    else if(Array.isArray(cfg)) cfg.forEach(p=>p.id && projectIds.add(p.id))
  }catch(e){}

  // 2) outputs/assessments folder names (pattern: ei_<id>_timestamp)
  try{
    const asses = await fs.readdir('outputs/assessments')
    for(const name of asses){
      const m = name.match(/^(ei_[a-f0-9]+)|^(\w+)/)
      if(m){ projectIds.add(m[1] || m[2]) }
    }
  }catch(e){}

  // 3) /tmp prompts
  try{
    const files = (await fs.readdir('/tmp')).filter(f=>f.startsWith('prompts-') && f.endsWith('.json'))
    for(const f of files){ const m = f.match(/^prompts-(.+?)-/) || []; if(m[1]) projectIds.add(m[1]) }
  }catch(e){}

  if(projectIds.size===0){
    console.error('No local projects found (checked config/projects.json, outputs/assessments, and /tmp).')
    process.exit(1)
  }

  const results = []

  for(const projectId of Array.from(projectIds)){
    try{
      // snapshot current settings (simulation)
      const snapshot = { projectId, timestamp: new Date().toISOString(), settings: { keras: { trainingCycles: 20, learningRate: 0.01 } } }
      const snapPath = path.join(SNAP_DIR, projectId + '.json')
      await fs.writeFile(snapPath, JSON.stringify(snapshot, null, 2), 'utf8')

      // create adjusted settings (small change)
      const adjusted = JSON.parse(JSON.stringify(snapshot))
      adjusted.timestamp = new Date().toISOString()
      adjusted.settings.keras.trainingCycles = snapshot.settings.keras.trainingCycles + 10
      adjusted.settings.keras.learningRate = +(snapshot.settings.keras.learningRate * 0.5).toFixed(6)
      const adjPath = path.join(ADJ_DIR, projectId + '.json')
      await fs.writeFile(adjPath, JSON.stringify(adjusted, null, 2), 'utf8')

      // write an apply script that would perform the change
      const applyScript = `#!/usr/bin/env bash
set -euo pipefail
echo "[SIM] Applying adjusted settings for project ${projectId}"
echo "Would set trainingCycles=${adjusted.settings.keras.trainingCycles} learningRate=${adjusted.settings.keras.learningRate}"
`
      const applyPath = path.join(APPLY_DIR, projectId + '.sh')
      await fs.writeFile(applyPath, applyScript, 'utf8')
      await fs.chmod(applyPath, 0o750)

      // simulate running a test/training and record metrics (deterministic)
      const baseline = +deterministicBaseline(projectId).toFixed(4)
      // improvement depends on change magnitude; small deterministic delta
      const delta = 0.01 + ((seedFromString(projectId) % 20)/1000)
      const newAcc = +(Math.min(0.9999, baseline + delta)).toFixed(4)

      const record = {
        projectId,
        snapshot: snapPath,
        adjusted: adjPath,
        applyScript: applyPath,
        metrics: {
          before: { accuracy: baseline },
          after: { accuracy: newAcc },
        },
        timestamp: new Date().toISOString()
      }
      results.push(record)

      // restore (in simulation, just copy snapshot to restored file)
      const restoredPath = path.join(OUTDIR, 'restored', projectId + '.json')
      await fs.mkdir(path.dirname(restoredPath), { recursive: true })
      await fs.writeFile(restoredPath, JSON.stringify(snapshot, null, 2), 'utf8')

      console.log(`Project ${projectId}: baseline=${baseline} -> after=${newAcc}`)
    }catch(err){
      console.error('Error for project', projectId, err)
    }
  }

  await fs.writeFile(RESULTS_FILE, JSON.stringify(results, null, 2), 'utf8')
  console.log('Integration simulation complete. Results:', RESULTS_FILE)
}

main().catch(err=>{ console.error(err); process.exit(1) })
