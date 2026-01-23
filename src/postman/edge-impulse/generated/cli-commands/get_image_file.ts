import { Command } from 'commander';
  import { get_image_file } from '../get_image_file';

export function addGet_image_fileCommand(program: Command) {
  program.command('get-image-file')
    .description('Auto-generated command for get_image_file')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_image_file(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-image-file' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
