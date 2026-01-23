import { Command } from 'commander';
  import { performance_calibration } from '../performance_calibration';

export function addPerformance_calibrationCommand(program: Command) {
  program.command('performance-calibration')
    .description('Auto-generated command for performance_calibration')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await performance_calibration(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
