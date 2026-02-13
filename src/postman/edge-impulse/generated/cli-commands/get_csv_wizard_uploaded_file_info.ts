import { Command } from 'commander';
  import { get_csv_wizard_uploaded_file_info } from '../get_csv_wizard_uploaded_file_info';

export function addGet_csv_wizard_uploaded_file_infoCommand(program: Command) {
  program.command('get-csv-wizard-uploaded-file-info')
    .description('Auto-generated command for get_csv_wizard_uploaded_file_info')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_csv_wizard_uploaded_file_info(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-csv-wizard-uploaded-file-info' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
