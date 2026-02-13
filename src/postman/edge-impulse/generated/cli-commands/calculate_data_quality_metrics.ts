import { Command } from 'commander';
  import { calculate_data_quality_metrics } from '../calculate_data_quality_metrics';

export function addCalculate_data_quality_metricsCommand(program: Command) {
  program.command('calculate-data-quality-metrics')
    .description('Auto-generated command for calculate_data_quality_metrics')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await calculate_data_quality_metrics(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'calculate-data-quality-metrics' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
