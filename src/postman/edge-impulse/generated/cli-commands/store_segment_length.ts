import { Command } from 'commander';
  import { store_segment_length } from '../store_segment_length';

export function addStore_segment_lengthCommand(program: Command) {
  program.command('store-segment-length')
    .description('Auto-generated command for store_segment_length')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await store_segment_length(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'store-segment-length' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
