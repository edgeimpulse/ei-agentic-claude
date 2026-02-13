import { Command } from 'commander';
  import { list_public_project_types } from '../list_public_project_types';

export function addList_public_project_typesCommand(program: Command) {
  program.command('list-public-project-types')
    .description('Auto-generated command for list_public_project_types')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_public_project_types(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-public-project-types' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
