import { Command } from 'commander';
  import { whitelabel_admin_update_deployment_options_order } from '../whitelabel_admin_update_deployment_options_order';

export function addWhitelabel_admin_update_deployment_options_orderCommand(program: Command) {
  program.command('whitelabel-admin-update-deployment-options-order')
    .description('Auto-generated command for whitelabel_admin_update_deployment_options_order')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_update_deployment_options_order(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-update-deployment-options-order' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
