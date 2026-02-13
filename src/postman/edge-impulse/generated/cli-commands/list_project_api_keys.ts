import { Command } from 'commander';
  import { list_project_api_keys } from '../list_project_api_keys';

export function addList_project_api_keysCommand(program: Command) {
  program.command('list-project-api-keys')
    .description('Auto-generated command for list_project_api_keys')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_project_api_keys(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-project-api-keys' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
