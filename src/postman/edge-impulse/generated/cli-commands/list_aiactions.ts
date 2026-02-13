import { Command } from 'commander';
  import { list_aiactions } from '../list_aiactions';

export function addList_aiactionsCommand(program: Command) {
  program.command('list-aiactions')
    .description('Auto-generated command for list_aiactions')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_aiactions(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-aiactions' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
