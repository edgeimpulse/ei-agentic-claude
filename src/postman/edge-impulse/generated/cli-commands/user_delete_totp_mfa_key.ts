import { Command } from 'commander';
  import { user_delete_totp_mfa_key } from '../user_delete_totp_mfa_key';

export function addUser_delete_totp_mfa_keyCommand(program: Command) {
  program.command('user-delete-totp-mfa-key')
    .description('Auto-generated command for user_delete_totp_mfa_key')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await user_delete_totp_mfa_key(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'user-delete-totp-mfa-key' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
