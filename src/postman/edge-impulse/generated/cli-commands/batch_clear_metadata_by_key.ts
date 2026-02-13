import { Command } from 'commander';
  import { batch_clear_metadata_by_key } from '../batch_clear_metadata_by_key';

export function addBatch_clear_metadata_by_keyCommand(program: Command) {
  program.command('batch-clear-metadata-by-key')
    .description('Auto-generated command for batch_clear_metadata_by_key')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await batch_clear_metadata_by_key(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'batch-clear-metadata-by-key' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
