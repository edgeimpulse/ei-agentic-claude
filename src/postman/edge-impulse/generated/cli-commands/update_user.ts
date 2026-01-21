import { Command } from 'commander';
import { update_user } from '../update_user.ts';

export function addUpdate_userCommand(program: Command) {
  program.command('update-user')
    .description('Auto-generated command for update_user')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
