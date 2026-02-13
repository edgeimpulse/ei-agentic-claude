import { Command } from 'commander';
  import { rebalance_dataset_v2 } from '../rebalance_dataset_v2';

export function addRebalance_dataset_v2Command(program: Command) {
  program.command('rebalance-dataset-v2')
    .description('Auto-generated command for rebalance_dataset_v2')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await rebalance_dataset_v2(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'rebalance-dataset-v2' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
