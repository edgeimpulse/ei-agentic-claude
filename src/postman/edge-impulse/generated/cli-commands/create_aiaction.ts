import { Command } from 'commander';
  import { create_aiaction } from '../create_aiaction';

export function addCreate_aiactionCommand(program: Command) {
  program.command('create-aiaction')
    .description('Auto-generated command for create_aiaction')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_aiaction(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-aiaction' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
