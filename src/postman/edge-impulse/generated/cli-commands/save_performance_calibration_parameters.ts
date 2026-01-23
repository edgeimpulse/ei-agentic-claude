import { Command } from 'commander';
  import { save_performance_calibration_parameters } from '../save_performance_calibration_parameters';

export function addSave_performance_calibration_parametersCommand(program: Command) {
  program.command('save-performance-calibration-parameters')
    .description('Auto-generated command for save_performance_calibration_parameters')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await save_performance_calibration_parameters(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
