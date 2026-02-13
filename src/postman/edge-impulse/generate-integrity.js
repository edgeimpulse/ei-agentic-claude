#!/usr/bin/env node

/**
 * Generate SHA256 integrity hashes for generated API client files
 * Run this after generating new client files to update integrity checks
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GENERATED_DIR = path.join(__dirname, 'generated');
const INTEGRITY_FILE = path.join(__dirname, 'integrity.json');

function calculateSHA256(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

function generateIntegrityHashes() {
  const hashes = {};

  if (!fs.existsSync(GENERATED_DIR)) {
    console.error('Generated directory not found:', GENERATED_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(GENERATED_DIR).filter(f =>
    f.endsWith('.ts') || f.endsWith('.js')
  );

  for (const file of files) {
    const filePath = path.join(GENERATED_DIR, file);
    const hash = calculateSHA256(filePath);
    hashes[file] = hash;
    console.log(`Generated hash for ${file}: ${hash}`);
  }

  fs.writeFileSync(INTEGRITY_FILE, JSON.stringify(hashes, null, 2));
  console.log(`\nIntegrity hashes saved to: ${INTEGRITY_FILE}`);
}

generateIntegrityHashes();