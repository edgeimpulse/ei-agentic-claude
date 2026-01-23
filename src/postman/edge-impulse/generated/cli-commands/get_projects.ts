import { Command } from 'commander';
  import { get_projects } from '../get_projects';

export function addGet_projectsCommand(program: Command) {
  program.command('get-projects')
    .description('Auto-generated command for get_projects')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_projects(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-projects' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
