import { Command } from 'commander';
  import { preview_default_files_in_folder } from '../preview_default_files_in_folder';

export function addPreview_default_files_in_folderCommand(program: Command) {
  program.command('preview-default-files-in-folder')
    .description('Auto-generated command for preview_default_files_in_folder')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await preview_default_files_in_folder(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'preview-default-files-in-folder' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
