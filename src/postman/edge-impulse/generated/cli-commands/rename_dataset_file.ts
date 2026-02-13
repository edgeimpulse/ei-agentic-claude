import { Command } from 'commander';
  import { rename_dataset_file } from '../rename_dataset_file';

export function addRename_dataset_fileCommand(program: Command) {
  program.command('rename-dataset-file')
    .description('Auto-generated command for rename_dataset_file')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await rename_dataset_file(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'rename-dataset-file' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
