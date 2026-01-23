import { Command } from 'commander';
  import { autotune_dsp_parameters } from '../autotune_dsp_parameters';

export function addAutotune_dsp_parametersCommand(program: Command) {
  program.command('autotune-dsp-parameters')
    .description('Auto-generated command for autotune_dsp_parameters')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await autotune_dsp_parameters(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'autotune-dsp-parameters' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
