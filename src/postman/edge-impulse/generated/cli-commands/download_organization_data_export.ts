import { Command } from 'commander';
  import { download_organization_data_export } from '../download_organization_data_export';

export function addDownload_organization_data_exportCommand(program: Command) {
  program.command('download-organization-data-export')
    .description('Auto-generated command for download_organization_data_export')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await download_organization_data_export(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'download-organization-data-export' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
