import { Command } from 'commander';
  import { get_new_block_id } from '../get_new_block_id';

export function addGet_new_block_idCommand(program: Command) {
  program.command('get-new-block-id')
    .description('Auto-generated command for get_new_block_id')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_new_block_id(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-new-block-id' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
