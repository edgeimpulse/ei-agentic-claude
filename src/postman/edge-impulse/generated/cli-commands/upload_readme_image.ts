import { Command } from 'commander';
  import { upload_readme_image } from '../upload_readme_image';

export function addUpload_readme_imageCommand(program: Command) {
  program.command('upload-readme-image')
    .description('Auto-generated command for upload_readme_image')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await upload_readme_image(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'upload-readme-image' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
