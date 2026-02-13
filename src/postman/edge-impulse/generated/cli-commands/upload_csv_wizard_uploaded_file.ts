import { Command } from 'commander';
  import { upload_csv_wizard_uploaded_file } from '../upload_csv_wizard_uploaded_file';

export function addUpload_csv_wizard_uploaded_fileCommand(program: Command) {
  program.command('upload-csv-wizard-uploaded-file')
    .description('Auto-generated command for upload_csv_wizard_uploaded_file')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await upload_csv_wizard_uploaded_file(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'upload-csv-wizard-uploaded-file' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
