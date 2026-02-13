import { Command } from 'commander';
  import { create_signed_upload_link_dataset } from '../create_signed_upload_link_dataset';

export function addCreate_signed_upload_link_datasetCommand(program: Command) {
  program.command('create-signed-upload-link-dataset')
    .description('Auto-generated command for create_signed_upload_link_dataset')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_signed_upload_link_dataset(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-signed-upload-link-dataset' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
