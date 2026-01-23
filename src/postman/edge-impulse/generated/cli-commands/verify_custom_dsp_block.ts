import { Command } from 'commander';
  import { verify_custom_dsp_block } from '../verify_custom_dsp_block';

export function addVerify_custom_dsp_blockCommand(program: Command) {
  program.command('verify-custom-dsp-block')
    .description('Auto-generated command for verify_custom_dsp_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await verify_custom_dsp_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'verify-custom-dsp-block' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
