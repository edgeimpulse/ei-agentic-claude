import { Command } from 'commander';
import { create_pre_signed_s3_upload_link } from '../create_pre_signed_s3_upload_link.ts';

export function addCreate_pre_signed_s3_upload_linkCommand(program: Command) {
  program.command('create-pre-signed-s3-upload-link')
    .description('Auto-generated command for create_pre_signed_s3_upload_link')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_pre_signed_s3_upload_link(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
