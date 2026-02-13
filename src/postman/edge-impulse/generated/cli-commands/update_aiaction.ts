import { Command } from 'commander';
  import { update_aiaction } from '../update_aiaction';

export function addUpdate_aiactionCommand(program: Command) {
  program.command('update-aiaction')
    .description('Auto-generated command for update_aiaction')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_aiaction(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-aiaction' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
