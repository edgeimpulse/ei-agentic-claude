import { Command } from 'commander';
import { get_public_metrics } from '../get_public_metrics.ts';

export function addGet_public_metricsCommand(program: Command) {
  program.command('get-public-metrics')
    .description('Auto-generated command for get_public_metrics')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_public_metrics(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
