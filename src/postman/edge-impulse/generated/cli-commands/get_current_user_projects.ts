import { Command } from 'commander';
  import { get_current_user_projects } from '../get_current_user_projects';

export function addGet_current_user_projectsCommand(program: Command) {
  program.command('get-current-user-projects')
    .description('Auto-generated command for get_current_user_projects')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_current_user_projects(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-current-user-projects' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
