import { Command } from 'commander';
  import { list_files_in_portal } from '../list_files_in_portal';

export function addList_files_in_portalCommand(program: Command) {
  program.command('list-files-in-portal')
    .description('Auto-generated command for list_files_in_portal')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_files_in_portal(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-files-in-portal' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
