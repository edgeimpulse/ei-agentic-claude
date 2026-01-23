import { Command } from 'commander';
  import { update_deploy_block } from '../update_deploy_block';

export function addUpdate_deploy_blockCommand(program: Command) {
  program.command('update-deploy-block')
    .description('Auto-generated command for update_deploy_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_deploy_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-deploy-block' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
