import { Command } from 'commander';
  import { whitelabel_admin_get_organization_jobs } from '../whitelabel_admin_get_organization_jobs';

export function addWhitelabel_admin_get_organization_jobsCommand(program: Command) {
  program.command('whitelabel-admin-get-organization-jobs')
    .description('Auto-generated command for whitelabel_admin_get_organization_jobs')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_get_organization_jobs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-get-organization-jobs' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
