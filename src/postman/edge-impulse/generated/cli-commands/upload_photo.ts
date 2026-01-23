import { Command } from 'commander';
  import { upload_photo } from '../upload_photo';

export function addUpload_photoCommand(program: Command) {
  program.command('upload-photo')
    .description('Auto-generated command for upload_photo')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await upload_photo(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'upload-photo' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
