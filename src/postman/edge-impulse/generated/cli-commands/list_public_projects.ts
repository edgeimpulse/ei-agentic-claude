import { Command } from 'commander';
import { list_public_projects } from '../list_public_projects.ts';

export function addList_public_projectsCommand(program: Command) {
  program.command('list-public-projects')
    .description('Auto-generated command for list_public_projects')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_public_projects(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
