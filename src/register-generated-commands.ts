// Auto-import and register all CLI commands from generated/cli-commands
import { Command } from "commander";

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { createRequire } from "module";

export async function registerGeneratedCommands(program: Command) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const commandsDir = path.join(__dirname, "postman/edge-impulse/generated/cli-commands");
  // Pick up both .ts (dev) and .js (dist) generated command files.
  const files = fs.readdirSync(commandsDir).filter(f => f.endsWith('.js') || f.endsWith('.ts'));
  for (const file of files) {
    const full = path.join(commandsDir, file);
    // Use dynamic import so ts-node ESM or Node ESM can load the module correctly.
    const mod = await import(pathToFileURL(full).href);
    const fn = Object.values(mod).find(v => typeof v === 'function');
    if (fn) fn(program);
  }
}
