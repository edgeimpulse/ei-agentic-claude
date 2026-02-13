import { Command } from 'commander';
  import { whitelabel_admin_create_organization_usage_report } from '../whitelabel_admin_create_organization_usage_report';

export function addWhitelabel_admin_create_organization_usage_reportCommand(program: Command) {
  program.command('whitelabel-admin-create-organization-usage-report')
    .description('Auto-generated command for whitelabel_admin_create_organization_usage_report')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_create_organization_usage_report(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-create-organization-usage-report' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
