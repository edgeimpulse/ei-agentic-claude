import { Command } from 'commander';
  import { download_organization_single_data_item } from '../download_organization_single_data_item';

export function addDownload_organization_single_data_itemCommand(program: Command) {
  program.command('download-organization-single-data-item')
    .description('Auto-generated command for download_organization_single_data_item')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await download_organization_single_data_item(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'download-organization-single-data-item' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
