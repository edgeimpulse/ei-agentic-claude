import { Command } from 'commander';
  import { remove_current_user_from_a_project } from '../remove_current_user_from_a_project';

export function addRemove_current_user_from_a_projectCommand(program: Command) {
  program.command('remove-current-user-from-a-project')
    .description('Auto-generated command for remove_current_user_from_a_project')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await remove_current_user_from_a_project(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'remove-current-user-from-a-project' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
