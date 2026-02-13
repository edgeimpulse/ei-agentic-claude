import { Command } from 'commander';
  import { clear_performance_calibration_state } from '../clear_performance_calibration_state';

export function addClear_performance_calibration_stateCommand(program: Command) {
  program.command('clear-performance-calibration-state')
    .description('Auto-generated command for clear_performance_calibration_state')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await clear_performance_calibration_state(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'clear-performance-calibration-state' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
