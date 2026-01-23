import { Command } from 'commander';
  import { get_the_interval_in_ms_of_the_training_data } from '../get_the_interval_in_ms_of_the_training_data';

export function addGet_the_interval_in_ms_of_the_training_dataCommand(program: Command) {
  program.command('get-the-interval-in-ms-of-the-training-data')
    .description('Auto-generated command for get_the_interval_in_ms_of_the_training_data')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_the_interval_in_ms_of_the_training_data(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
