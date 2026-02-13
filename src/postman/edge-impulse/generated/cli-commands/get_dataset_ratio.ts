import { Command } from 'commander';
  import { get_dataset_ratio } from '../get_dataset_ratio';

export function addGet_dataset_ratioCommand(program: Command) {
  program.command('get-dataset-ratio')
    .description('Auto-generated command for get_dataset_ratio')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_dataset_ratio(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-dataset-ratio' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
