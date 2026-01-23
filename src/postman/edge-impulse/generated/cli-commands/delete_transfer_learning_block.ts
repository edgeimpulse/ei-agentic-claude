import { Command } from 'commander';
  import { delete_transfer_learning_block } from '../delete_transfer_learning_block';

export function addDelete_transfer_learning_blockCommand(program: Command) {
  program.command('delete-transfer-learning-block')
    .description('Auto-generated command for delete_transfer_learning_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_transfer_learning_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
