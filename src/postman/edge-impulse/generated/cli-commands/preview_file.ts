import { Command } from 'commander';
  import { preview_file } from '../preview_file';

export function addPreview_fileCommand(program: Command) {
  program.command('preview-file')
    .description('Auto-generated command for preview_file')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await preview_file(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'preview-file' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
