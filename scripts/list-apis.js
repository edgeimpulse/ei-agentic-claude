#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function listAllAPIs() {
  const apiDir = path.resolve(__dirname, '../src/postman/edge-impulse/generated');

  if (!fs.existsSync(apiDir)) {
    console.error('API directory not found');
    process.exit(1);
  }

  const apiFiles = fs.readdirSync(apiDir)
    .filter(f => f.endsWith('.ts') && !f.includes('cli-commands'))
    .map(f => f.replace('.ts', ''))
    .sort();

  console.log(`Total APIs: ${apiFiles.length}\n`);

  // Group by category
  const categories = {
    projects: apiFiles.filter(f => f.includes('project')),
    users: apiFiles.filter(f => f.includes('user')),
    jobs: apiFiles.filter(f => f.includes('job')),
    training: apiFiles.filter(f => f.includes('train') || f.includes('keras') || f.includes('optimize') || f.includes('retrain')),
    data: apiFiles.filter(f => f.includes('data') || f.includes('sample') || f.includes('dataset')),
    organizations: apiFiles.filter(f => f.includes('organization')),
    deployments: apiFiles.filter(f => f.includes('deploy')),
    dsp: apiFiles.filter(f => f.includes('dsp')),
    evaluation: apiFiles.filter(f => f.includes('evaluate')),
    files: apiFiles.filter(f => f.includes('file') || f.includes('upload') || f.includes('download')),
    admin: apiFiles.filter(f => f.includes('admin') || f.includes('white_label') || f.includes('theme')),
    auth: apiFiles.filter(f => f.includes('auth') || f.includes('login') || f.includes('token')),
    models: apiFiles.filter(f => f.includes('model') || f.includes('impulse')),
    devices: apiFiles.filter(f => f.includes('device')),
    pipelines: apiFiles.filter(f => f.includes('pipeline')),
    notifications: apiFiles.filter(f => f.includes('notification') || f.includes('email')),
    metrics: apiFiles.filter(f => f.includes('metric')),
  };

  // Add uncategorized to 'other'
  const categorized = Object.values(categories).flat();
  categories.other = apiFiles.filter(api => !categorized.includes(api));

  for (const [category, apis] of Object.entries(categories)) {
    if (apis.length > 0) {
      console.log(`${category.toUpperCase()} (${apis.length}):`);
      apis.forEach(api => console.log(`  - ${api}`));
      console.log('');
    }
  }
}

listAllAPIs();