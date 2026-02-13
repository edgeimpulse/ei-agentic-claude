import { Command } from 'commander';
  import { download_dataset_folder } from '../download_dataset_folder';

export function addDownload_dataset_folderCommand(program: Command) {
  program.command('download-dataset-folder')
    .description('Auto-generated command for download_dataset_folder')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await download_dataset_folder(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'download-dataset-folder' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
