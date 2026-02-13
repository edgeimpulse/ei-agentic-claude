import { Command } from 'commander';
  import { whitelabel_admin_remove_user_from_organization } from '../whitelabel_admin_remove_user_from_organization';

export function addWhitelabel_admin_remove_user_from_organizationCommand(program: Command) {
  program.command('whitelabel-admin-remove-user-from-organization')
    .description('Auto-generated command for whitelabel_admin_remove_user_from_organization')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_remove_user_from_organization(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-remove-user-from-organization' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
