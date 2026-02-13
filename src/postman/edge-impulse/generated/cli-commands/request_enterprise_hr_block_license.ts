import { Command } from 'commander';
  import { request_enterprise_hr_block_license } from '../request_enterprise_hr_block_license';

export function addRequest_enterprise_hr_block_licenseCommand(program: Command) {
  program.command('request-enterprise-hr-block-license')
    .description('Auto-generated command for request_enterprise_hr_block_license')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await request_enterprise_hr_block_license(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'request-enterprise-hr-block-license' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
