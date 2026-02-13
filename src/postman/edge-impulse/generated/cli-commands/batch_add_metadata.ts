import { Command } from 'commander';
  import { batch_add_metadata } from '../batch_add_metadata';

export function addBatch_add_metadataCommand(program: Command) {
  program.command('batch-add-metadata')
    .description('Auto-generated command for batch_add_metadata')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await batch_add_metadata(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'batch-add-metadata' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
