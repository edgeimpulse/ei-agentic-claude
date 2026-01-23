import { Command } from 'commander';
  import { hide_dataset } from '../hide_dataset';

export function addHide_datasetCommand(program: Command) {
  program.command('hide-dataset')
    .description('Auto-generated command for hide_dataset')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await hide_dataset(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
