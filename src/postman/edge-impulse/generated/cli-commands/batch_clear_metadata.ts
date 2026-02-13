import { Command } from 'commander';
  import { batch_clear_metadata } from '../batch_clear_metadata';

export function addBatch_clear_metadataCommand(program: Command) {
  program.command('batch-clear-metadata')
    .description('Auto-generated command for batch_clear_metadata')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await batch_clear_metadata(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'batch-clear-metadata' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
