import { Command } from 'commander';
  import { get_global_white_label_metrics } from '../get_global_white_label_metrics';

export function addGet_global_white_label_metricsCommand(program: Command) {
  program.command('get-global-white-label-metrics')
    .description('Auto-generated command for get_global_white_label_metrics')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_global_white_label_metrics(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
