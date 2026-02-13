import { Command } from 'commander';
  import { whitelabel_admin_get_organization_compute_time_usage } from '../whitelabel_admin_get_organization_compute_time_usage';

export function addWhitelabel_admin_get_organization_compute_time_usageCommand(program: Command) {
  program.command('whitelabel-admin-get-organization-compute-time-usage')
    .description('Auto-generated command for whitelabel_admin_get_organization_compute_time_usage')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_get_organization_compute_time_usage(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-get-organization-compute-time-usage' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
