import { Command } from 'commander';
  import { add_data_items_from_bucket } from '../add_data_items_from_bucket';

export function addAdd_data_items_from_bucketCommand(program: Command) {
  program.command('add-data-items-from-bucket')
    .description('Auto-generated command for add_data_items_from_bucket')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_data_items_from_bucket(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
