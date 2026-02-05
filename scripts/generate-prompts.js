#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function loadProjectJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error('Failed to load', filePath, e.message);
    return null;
  }
}

function detectImpulseType(project) {
  // Look for common indicators in project JSON to infer impulse type
  if (!project) return 'unknown';
  const name = (project.name || '').toString().toLowerCase();
  if (name.includes('anomaly')) return 'anomaly';
  if (name.includes('object-detection') || name.includes('keras-object-detection')) return 'object-detection';
  if (name.includes('keras')) return 'keras';
  if (project.impulse && project.impulse.blocks) return 'impulse';
  if (project.type) return project.type;
  return 'unknown';
}

function makePrompts(projectId, projectJson) {
  const impulseType = detectImpulseType(projectJson);
  const base = `Project ID: ${projectId}\nSummary: ${projectJson.name || 'Unnamed project'}\n`;

  // Choose prioritized goals depending on impulse type
  let goalsOrder = ['accuracy', 'latency', 'size', 'robustness'];
  if (impulseType === 'anomaly') {
    goalsOrder = ['robustness', 'accuracy', 'size', 'latency'];
  } else if (impulseType === 'object-detection' || impulseType === 'keras') {
    goalsOrder = ['accuracy', 'size', 'latency', 'robustness'];
  }

  const goalDefs = {
    accuracy: 'Improve accuracy on validation data while keeping training time reasonable.',
    latency: 'Reduce inference latency on edge devices without losing more than 2% accuracy.',
    size: 'Reduce model size for deployment to constrained devices.',
    robustness: 'Improve robustness to noisy inputs and edge-case samples.'
  };

  return goalsOrder.map(gk => ({
    id: `${projectId}-${gk}`,
    goal: gk,
    prompt: `${base}Impulse type: ${impulseType}\nOptimization goal: ${goalDefs[gk]}\nCurrent impulse (truncated): ${JSON.stringify(projectJson.impulse || {}, null, 2).slice(0, 2000)}\n\nProvide a set of recommended block-level changes (DSP parameters, model selection, training parameters, data augmentation, and evaluation strategy) that can be applied via Edge Impulse APIs to achieve the goal. For each recommendation, include the expected trade-offs and a simple CLI invocation using this repo's CLI to apply or test the change.`
  }));
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: generate-prompts.js <project-json-path> [<project-json-path> ...]');
    process.exit(2);
  }

  for (const p of args) {
    const pj = loadProjectJson(p);
    if (!pj) continue;
    const projectId = pj.id || pj.projectId || path.basename(p).replace(/\.json$/, '');
    const prompts = makePrompts(projectId, pj);
    // Write one file per goal so iterative testing can be targeted
    for (const pr of prompts) {
      const out = `/tmp/prompts-${projectId}-${pr.goal}.json`;
      // Add an example 'apply_cli' suggestion depending on goal
      pr.apply_cli = (() => {
        switch (pr.goal) {
          case 'accuracy':
            return `node dist/cli.js train-model-keras --api-key $EI_API_KEY --params '{"projectId":"${projectId}","learnId":<learnId>,"epochs":20}'`;
          case 'latency':
            return `node dist/cli.js optimize-model --api-key $EI_API_KEY --params '{"projectId":"${projectId}","versionId":<versionId>,"target":"tflite"}'`;
          case 'size':
            return `node dist/cli.js build-on-device-model --api-key $EI_API_KEY --params '{"projectId":"${projectId}","target":"npu"}'`;
          case 'robustness':
            return `node dist/cli.js generate-data-explorer-features --api-key $EI_API_KEY --params '{"projectId":"${projectId}"}'`;
          default:
            return '';
        }
      })();

      fs.writeFileSync(out, JSON.stringify(pr, null, 2), 'utf8');
      console.log('Wrote', out);
    }
  }
}

main();
