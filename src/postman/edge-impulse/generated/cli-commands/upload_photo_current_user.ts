import { Command } from 'commander';
  import { upload_photo_current_user } from '../upload_photo_current_user';

export function addUpload_photo_current_userCommand(program: Command) {
  program.command('upload-photo-current-user')
    .description('Auto-generated command for upload_photo_current_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await upload_photo_current_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'upload-photo-current-user' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
