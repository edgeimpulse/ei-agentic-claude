import { Command } from 'commander';
import { classify_sample } from '../classify_sample.ts';

export function addClassify_sampleCommand(program: Command) {
  program.command('classify-sample')
    .description('Auto-generated command for classify_sample')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await classify_sample(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
