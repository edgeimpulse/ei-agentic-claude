import { Command } from 'commander';
import { autotune_dsp_parameters } from '../autotune_dsp_parameters.ts';

export function addAutotune_dsp_parametersCommand(program: Command) {
  program.command('autotune-dsp-parameters')
    .description('Auto-generated command for autotune_dsp_parameters')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await autotune_dsp_parameters(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
