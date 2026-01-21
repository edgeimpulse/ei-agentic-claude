import { Command } from 'commander';
import { add_transfer_learning_block } from '../add_transfer_learning_block.ts';

export function addAdd_transfer_learning_blockCommand(program: Command) {
  program.command('add-transfer-learning-block')
    .description('Auto-generated command for add_transfer_learning_block')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_transfer_learning_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
