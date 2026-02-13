import { Command } from 'commander';
  import { download_csv_wizard_config } from '../download_csv_wizard_config';

export function addDownload_csv_wizard_configCommand(program: Command) {
  program.command('download-csv-wizard-config')
    .description('Auto-generated command for download_csv_wizard_config')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await download_csv_wizard_config(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'download-csv-wizard-config' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
