import { Command } from 'commander';
import { crop_sample } from '../crop_sample.ts';

export function addCrop_sampleCommand(program: Command) {
  program.command('crop-sample')
    .description('Auto-generated command for crop_sample')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await crop_sample(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
