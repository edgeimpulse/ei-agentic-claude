import { Command } from 'commander';
  import { bulk_update_metadata } from '../bulk_update_metadata';

export function addBulk_update_metadataCommand(program: Command) {
  program.command('bulk-update-metadata')
    .description('Auto-generated command for bulk_update_metadata')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await bulk_update_metadata(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
