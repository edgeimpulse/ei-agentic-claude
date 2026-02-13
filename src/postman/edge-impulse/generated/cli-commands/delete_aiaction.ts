import { Command } from 'commander';
  import { delete_aiaction } from '../delete_aiaction';

export function addDelete_aiactionCommand(program: Command) {
  program.command('delete-aiaction')
    .description('Auto-generated command for delete_aiaction')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_aiaction(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'delete-aiaction' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
