import { Command } from 'commander';
import { find_a_user } from '../find_a_user.ts';

export function addFind_a_userCommand(program: Command) {
  program.command('find-a-user')
    .description('Auto-generated command for find_a_user')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await find_a_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
