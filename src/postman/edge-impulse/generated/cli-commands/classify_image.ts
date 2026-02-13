import { Command } from 'commander';
  import { classify_image } from '../classify_image';

export function addClassify_imageCommand(program: Command) {
  program.command('classify-image')
    .description('Auto-generated command for classify_image')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await classify_image(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'classify-image' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
