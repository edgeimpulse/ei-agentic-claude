import { Command } from 'commander';
import { remove_current_user_from_a_project } from '../remove_current_user_from_a_project.ts';

export function addRemove_current_user_from_a_projectCommand(program: Command) {
  program.command('remove-current-user-from-a-project')
    .description('Auto-generated command for remove_current_user_from_a_project')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await remove_current_user_from_a_project(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
