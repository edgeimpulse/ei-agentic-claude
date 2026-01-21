import { Command } from 'commander';
import { get_current_user } from '../get_current_user.ts';

export function addGet_current_userCommand(program: Command) {
  program.command('get-current-user')
    .description('Auto-generated command for get_current_user')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_current_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
