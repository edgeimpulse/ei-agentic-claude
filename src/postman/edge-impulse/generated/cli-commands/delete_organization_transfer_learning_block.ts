import { Command } from 'commander';
  import { delete_organization_transfer_learning_block } from '../delete_organization_transfer_learning_block';

export function addDelete_organization_transfer_learning_blockCommand(program: Command) {
  program.command('delete-organization-transfer-learning-block')
    .description('Auto-generated command for delete_organization_transfer_learning_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_organization_transfer_learning_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'delete-organization-transfer-learning-block' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
