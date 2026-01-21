import { Command } from 'commander';
import { activate_user_by_third_party_activation_code } from '../activate_user_by_third_party_activation_code.ts';

export function addActivate_user_by_third_party_activation_codeCommand(program: Command) {
  program.command('activate-user-by-third-party-activation-code')
    .description('Auto-generated command for activate_user_by_third_party_activation_code')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await activate_user_by_third_party_activation_code(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
