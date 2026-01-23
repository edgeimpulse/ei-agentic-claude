import { Command } from 'commander';
  import { trained_features_for_sample } from '../trained_features_for_sample';

export function addTrained_features_for_sampleCommand(program: Command) {
  program.command('trained-features-for-sample')
    .description('Auto-generated command for trained_features_for_sample')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await trained_features_for_sample(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'trained-features-for-sample' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
