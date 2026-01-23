import { Command } from 'commander';
  import { profile_custom_dsp_block } from '../profile_custom_dsp_block';

export function addProfile_custom_dsp_blockCommand(program: Command) {
  program.command('profile-custom-dsp-block')
    .description('Auto-generated command for profile_custom_dsp_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await profile_custom_dsp_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'profile-custom-dsp-block' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
