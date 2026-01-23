#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distCli = path.join(__dirname, '..', 'dist', 'cli.js');

if (!fs.existsSync(distCli)) {
  console.error('dist/cli.js does not exist. Run tsc first.');
  process.exit(1);
}

const src = await fs.promises.readFile(distCli, 'utf8');

// Fix local ESM imports that lack .js extension
let out = src.replace(/from \"\.\/register-generated-commands\";/g, 'from "./register-generated-commands.js";');
out = out.replace(/from \"\.\/register-generated-commands\"/g, 'from "./register-generated-commands.js"');

await fs.promises.writeFile(distCli, out, 'utf8');
console.log('Patched dist/cli.js imports.');

// Patch generated CLI command imports to include .js extensions
const cliCommandsDir = path.join(__dirname, '..', 'dist', 'postman', 'edge-impulse', 'generated', 'cli-commands');
if (fs.existsSync(cliCommandsDir)) {
  const files = await fs.promises.readdir(cliCommandsDir);
  for (const f of files) {
    if (!f.endsWith('.js')) continue;
    const p = path.join(cliCommandsDir, f);
    let c = await fs.promises.readFile(p, 'utf8');
    // replace from '../some_name' or "../some_name" with ../some_name.js when .js missing
    c = c.replace(/from\s+(['"])((?:\.\.\/)+[^'"\s]+?)\1/g, (m, quote, rel) => {
      // only append .js when there's no extension already
      if (/\.(js|json)$/.test(rel)) return `from ${quote}${rel}${quote}`;
      return `from ${quote}${rel}.js${quote}`;
    });
    await fs.promises.writeFile(p, c, 'utf8');
  }
  console.log('Patched generated CLI command imports to use .js extensions.');
} else {
  console.warn('CLI commands dir not found; skipping additional patches.');
}

// Fix any accidental double-quote injection
const fixFiles = await fs.promises.readdir(cliCommandsDir);
for (const f of fixFiles) {
  if (!f.endsWith('.js')) continue;
  const p = path.join(cliCommandsDir, f);
  let content = await fs.promises.readFile(p, 'utf8');
  content = content.replace(/from\s+''\.\.\//g, "from '../");
  content = content.replace(/from\s+\"\"\.\.\//g, 'from "../');
  await fs.promises.writeFile(p, content, 'utf8');
}
console.log('Cleaned accidental double quotes in CLI command imports.');

// Additionally, patch any remaining relative imports across dist to include .js
async function patchAllRelativeImports(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      await patchAllRelativeImports(p);
      continue;
    }
    if (!ent.isFile() || !p.endsWith('.js')) continue;
    let c = await fs.promises.readFile(p, 'utf8');
    const updated = c.replace(/from\s+(['"])((?:\.\.\/|\.\/)+[^'"\s]+?)\1/g, (m, quote, rel) => {
      if (/\.(js|json)$/.test(rel)) return `from ${quote}${rel}${quote}`;
      return `from ${quote}${rel}.js${quote}`;
    });
    if (updated !== c) await fs.promises.writeFile(p, updated, 'utf8');
  }
}

await patchAllRelativeImports(path.join(__dirname, '..', 'dist'));
console.log('Patched remaining relative imports across dist to include .js extensions.');
