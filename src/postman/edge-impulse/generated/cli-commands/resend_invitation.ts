import { Command } from 'commander';
  import { resend_invitation } from '../resend_invitation';

export function addResend_invitationCommand(program: Command) {
  program.command('resend-invitation')
    .description('Auto-generated command for resend_invitation')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await resend_invitation(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
