import { Command } from 'commander';
  import { trained_features } from '../trained_features';

export function addTrained_featuresCommand(program: Command) {
  program.command('trained-features')
    .description('Auto-generated command for trained_features')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await trained_features(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'trained-features' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
