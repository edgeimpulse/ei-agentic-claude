import { Command } from 'commander';
  import { get_dsp_config } from '../get_dsp_config';

export function addGet_dsp_configCommand(program: Command) {
  program.command('get-dsp-config')
    .description('Auto-generated command for get_dsp_config')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_dsp_config(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-dsp-config' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
