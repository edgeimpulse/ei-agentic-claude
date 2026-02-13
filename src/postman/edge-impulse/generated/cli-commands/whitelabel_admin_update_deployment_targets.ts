import { Command } from 'commander';
  import { whitelabel_admin_update_deployment_targets } from '../whitelabel_admin_update_deployment_targets';

export function addWhitelabel_admin_update_deployment_targetsCommand(program: Command) {
  program.command('whitelabel-admin-update-deployment-targets')
    .description('Auto-generated command for whitelabel_admin_update_deployment_targets')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_update_deployment_targets(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-update-deployment-targets' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
