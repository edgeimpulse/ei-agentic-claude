import { Command } from 'commander';
  import { get_organization_dsp_block } from '../get_organization_dsp_block';

export function addGet_organization_dsp_blockCommand(program: Command) {
  program.command('get-organization-dsp-block')
    .description('Auto-generated command for get_organization_dsp_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_organization_dsp_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-organization-dsp-block' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
