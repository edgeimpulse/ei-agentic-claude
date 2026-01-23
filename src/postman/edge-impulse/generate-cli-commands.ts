import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Script to generate CLI command stubs for every generated client in /generated.
 * Each command will be placed in /generated/cli-commands/ as a .ts file.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const GENERATED_DIR = path.join(__dirname, 'generated');
const CLI_COMMANDS_DIR = path.join(GENERATED_DIR, 'cli-commands');

function sanitizeCommandName(name: string) {
  // Remove .ts and convert underscores to dashes for CLI
  return name.replace(/\.ts$/, '').replace(/_/g, '-');
}

function main() {
  if (!fs.existsSync(CLI_COMMANDS_DIR)) fs.mkdirSync(CLI_COMMANDS_DIR);
  const files = fs.readdirSync(GENERATED_DIR).filter(f => f.endsWith('.ts'));
  for (const file of files) {
    const baseName = file.replace(/\.ts$/, '');
    const commandName = sanitizeCommandName(file);
    const importName = baseName;

    const commandStub = `import { Command } from 'commander';
  import { ${importName} } from '../${baseName}';

export function add${baseName.charAt(0).toUpperCase() + baseName.slice(1)}Command(program: Command) {
  program.command('${commandName}')
    .description('Auto-generated command for ${baseName}')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await ${importName}(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(\`Warning: Command '${commandName}' may need extension - \${e instanceof Error ? e.message : e}\`);
        process.exit(0);
      }
    });
}
`;
    fs.writeFileSync(path.join(CLI_COMMANDS_DIR, `${baseName}.ts`), commandStub);
  }
  console.log(`Generated CLI command stubs for ${files.length} clients in ${CLI_COMMANDS_DIR}`);
}

main();
