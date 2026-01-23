import { Command } from 'commander';
  import { change_dataset } from '../change_dataset';

export function addChange_datasetCommand(program: Command) {
  program.command('change-dataset')
    .description('Auto-generated command for change_dataset')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await change_dataset(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'change-dataset' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
