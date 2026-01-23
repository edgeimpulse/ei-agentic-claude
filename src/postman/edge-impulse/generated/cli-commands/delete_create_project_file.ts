import { Command } from 'commander';
  import { delete_create_project_file } from '../delete_create_project_file';

export function addDelete_create_project_fileCommand(program: Command) {
  program.command('delete-create-project-file')
    .description('Auto-generated command for delete_create_project_file')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_create_project_file(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'delete-create-project-file' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
