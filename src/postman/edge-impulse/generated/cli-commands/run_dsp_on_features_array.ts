import { Command } from 'commander';
  import { run_dsp_on_features_array } from '../run_dsp_on_features_array';

export function addRun_dsp_on_features_arrayCommand(program: Command) {
  program.command('run-dsp-on-features-array')
    .description('Auto-generated command for run_dsp_on_features_array')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await run_dsp_on_features_array(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'run-dsp-on-features-array' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
