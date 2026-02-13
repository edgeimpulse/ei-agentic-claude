import { Command } from 'commander';
  import { get_organization_deploy_block } from '../get_organization_deploy_block';

export function addGet_organization_deploy_blockCommand(program: Command) {
  program.command('get-organization-deploy-block')
    .description('Auto-generated command for get_organization_deploy_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_organization_deploy_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-organization-deploy-block' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
