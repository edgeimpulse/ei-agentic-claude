import { Command } from 'commander';
  import { whitelabel_admin_get_organization_exports } from '../whitelabel_admin_get_organization_exports';

export function addWhitelabel_admin_get_organization_exportsCommand(program: Command) {
  program.command('whitelabel-admin-get-organization-exports')
    .description('Auto-generated command for whitelabel_admin_get_organization_exports')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_get_organization_exports(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-get-organization-exports' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
