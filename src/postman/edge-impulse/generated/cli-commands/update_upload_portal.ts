import { Command } from 'commander';
  import { update_upload_portal } from '../update_upload_portal';

export function addUpdate_upload_portalCommand(program: Command) {
  program.command('update-upload-portal')
    .description('Auto-generated command for update_upload_portal')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_upload_portal(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
