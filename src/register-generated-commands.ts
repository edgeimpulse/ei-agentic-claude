// Auto-import and register all CLI commands from generated/cli-commands
import { Command } from "commander";

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { createRequire } from "module";
import crypto from "crypto";

export async function registerGeneratedCommands(program: Command) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const commandsDir = path.join(__dirname, "postman/edge-impulse/generated/cli-commands");
  // Pick up both .ts (dev) and .js (dist) generated command files.
  const files = fs.readdirSync(commandsDir).filter(f => f.endsWith('.js') || f.endsWith('.ts'));

  // Load integrity hashes if available
  const integrityPath = path.join(commandsDir, 'integrity.json');
  let expectedHashes: Record<string, string> = {};
  if (fs.existsSync(integrityPath)) {
    expectedHashes = JSON.parse(fs.readFileSync(integrityPath, 'utf-8'));
  }

  for (const file of files) {
    const full = path.join(commandsDir, file);

    // Verify file integrity if hash is available
    if (expectedHashes[file]) {
      const actualHash = calculateSHA256(full);
      if (actualHash !== expectedHashes[file]) {
        throw new Error(`Integrity check failed for ${file}. File may be corrupted or tampered with.`);
      }
    }

    // Use dynamic import so ts-node ESM or Node ESM can load the module correctly.
    const mod = await import(pathToFileURL(full).href);
    const fn = Object.values(mod).find(v => typeof v === 'function');
    if (fn) fn(program);
  }
}

function calculateSHA256(filePath: string): string {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer); // hash actual file contents
  return hashSum.digest('hex');
}
