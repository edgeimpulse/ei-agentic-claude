import { Command } from 'commander';
import { rebalance_dataset } from '../rebalance_dataset.ts';

export function addRebalance_datasetCommand(program: Command) {
  program.command('rebalance-dataset')
    .description('Auto-generated command for rebalance_dataset')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await rebalance_dataset(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
