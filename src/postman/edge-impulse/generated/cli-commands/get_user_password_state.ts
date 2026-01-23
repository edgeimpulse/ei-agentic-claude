import { Command } from 'commander';
  import { get_user_password_state } from '../get_user_password_state';

export function addGet_user_password_stateCommand(program: Command) {
  program.command('get-user-password-state')
    .description('Auto-generated command for get_user_password_state')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_user_password_state(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
