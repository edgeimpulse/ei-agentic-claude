import { Command } from 'commander';
  import { whitelabel_admin_create_organization_project } from '../whitelabel_admin_create_organization_project';

export function addWhitelabel_admin_create_organization_projectCommand(program: Command) {
  program.command('whitelabel-admin-create-organization-project')
    .description('Auto-generated command for whitelabel_admin_create_organization_project')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_create_organization_project(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-create-organization-project' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
