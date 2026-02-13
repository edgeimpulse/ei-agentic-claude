import { Command } from 'commander';
  import { whitelabel_admin_update_default_deployment_target } from '../whitelabel_admin_update_default_deployment_target';

export function addWhitelabel_admin_update_default_deployment_targetCommand(program: Command) {
  program.command('whitelabel-admin-update-default-deployment-target')
    .description('Auto-generated command for whitelabel_admin_update_default_deployment_target')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_update_default_deployment_target(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-update-default-deployment-target' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
