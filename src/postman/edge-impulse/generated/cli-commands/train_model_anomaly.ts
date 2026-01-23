import { Command } from 'commander';
  import { train_model_anomaly } from '../train_model_anomaly';

export function addTrain_model_anomalyCommand(program: Command) {
  program.command('train-model-anomaly')
    .description('Auto-generated command for train_model_anomaly')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await train_model_anomaly(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
