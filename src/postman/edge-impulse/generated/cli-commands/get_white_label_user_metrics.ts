import { Command } from 'commander';
import { get_white_label_user_metrics } from '../get_white_label_user_metrics.ts';

export function addGet_white_label_user_metricsCommand(program: Command) {
  program.command('get-white-label-user-metrics')
    .description('Auto-generated command for get_white_label_user_metrics')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_white_label_user_metrics(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
