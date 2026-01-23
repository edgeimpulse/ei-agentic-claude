import { Command } from 'commander';
  import { update_dataset } from '../update_dataset';

export function addUpdate_datasetCommand(program: Command) {
  program.command('update-dataset')
    .description('Auto-generated command for update_dataset')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_dataset(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
