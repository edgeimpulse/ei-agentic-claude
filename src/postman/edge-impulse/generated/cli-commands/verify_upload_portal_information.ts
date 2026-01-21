import { Command } from 'commander';
import { verify_upload_portal_information } from '../verify_upload_portal_information.ts';

export function addVerify_upload_portal_informationCommand(program: Command) {
  program.command('verify-upload-portal-information')
    .description('Auto-generated command for verify_upload_portal_information')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await verify_upload_portal_information(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
