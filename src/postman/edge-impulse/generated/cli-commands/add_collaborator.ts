import { Command } from 'commander';
import { add_collaborator } from '../add_collaborator.js';

export function addAdd_collaboratorCommand(program: Command) {
  program.command('add-collaborator')
    .description('Auto-generated command for add_collaborator')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_collaborator(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
