import { Command } from 'commander';
import { features_for_sample } from '../features_for_sample.ts';

export function addFeatures_for_sampleCommand(program: Command) {
  program.command('features-for-sample')
    .description('Auto-generated command for features_for_sample')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await features_for_sample(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
