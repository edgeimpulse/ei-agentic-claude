import { Command } from 'commander';
  import { delete_upload_portal } from '../delete_upload_portal';

export function addDelete_upload_portalCommand(program: Command) {
  program.command('delete-upload-portal')
    .description('Auto-generated command for delete_upload_portal')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_upload_portal(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
