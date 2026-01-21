import { Command } from 'commander';
import { count_samples } from '../count_samples.ts';

export function addCount_samplesCommand(program: Command) {
  program.command('count-samples')
    .description('Auto-generated command for count_samples')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await count_samples(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
