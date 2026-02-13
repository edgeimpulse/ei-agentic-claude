#!/usr/bin/env node

/**
 * Generate SHA256 integrity hashes for files in dist/postman/edge-impulse/generated
 * Writes `integrity.json` into the `cli-commands` folder so the runtime integrity check can use it.
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const GENERATED_DIR = path.join(process.cwd(), 'dist', 'postman', 'edge-impulse', 'generated');
const CLI_COMMANDS_DIR = path.join(GENERATED_DIR, 'cli-commands');

function calculateSHA256(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

function generate() {
  if (!fs.existsSync(CLI_COMMANDS_DIR)) {
    console.error('Target generated CLI commands directory not found:', CLI_COMMANDS_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(CLI_COMMANDS_DIR).filter(f => f.endsWith('.js') || f.endsWith('.ts'));
  const hashes = {};

  for (const file of files) {
    const p = path.join(CLI_COMMANDS_DIR, file);
    hashes[file] = calculateSHA256(p);
  }

  const out = path.join(CLI_COMMANDS_DIR, 'integrity.json');
  fs.writeFileSync(out, JSON.stringify(hashes, null, 2));
  console.log('Wrote integrity.json to', out);
}

generate();
