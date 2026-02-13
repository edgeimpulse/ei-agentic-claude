import { Command } from 'commander';
  import { list_dataset_files_in_folder } from '../list_dataset_files_in_folder';

export function addList_dataset_files_in_folderCommand(program: Command) {
  program.command('list-dataset-files-in-folder')
    .description('Auto-generated command for list_dataset_files_in_folder')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_dataset_files_in_folder(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-dataset-files-in-folder' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
