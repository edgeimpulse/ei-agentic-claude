import { Command } from 'commander';
import { auto_label_an_image } from '../auto_label_an_image.ts';

export function addAuto_label_an_imageCommand(program: Command) {
  program.command('auto-label-an-image')
    .description('Auto-generated command for auto_label_an_image')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await auto_label_an_image(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
