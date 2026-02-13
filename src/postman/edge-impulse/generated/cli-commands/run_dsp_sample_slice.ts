import { Command } from 'commander';
  import { run_dsp_sample_slice } from '../run_dsp_sample_slice';

export function addRun_dsp_sample_sliceCommand(program: Command) {
  program.command('run-dsp-sample-slice')
    .description('Auto-generated command for run_dsp_sample_slice')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await run_dsp_sample_slice(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'run-dsp-sample-slice' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
