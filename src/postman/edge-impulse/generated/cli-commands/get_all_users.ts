import { Command } from 'commander';
import { get_all_users } from '../get_all_users.ts';

export function addGet_all_usersCommand(program: Command) {
  program.command('get-all-users')
    .description('Auto-generated command for get_all_users')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_all_users(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
