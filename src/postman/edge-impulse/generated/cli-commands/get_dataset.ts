import { Command } from 'commander';
  import { get_dataset } from '../get_dataset';

export function addGet_datasetCommand(program: Command) {
  program.command('get-dataset')
    .description('Auto-generated command for get_dataset')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_dataset(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
