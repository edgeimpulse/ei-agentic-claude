import { Command } from 'commander';
import { add_a_storage_bucket } from '../add_a_storage_bucket.ts';

export function addAdd_a_storage_bucketCommand(program: Command) {
  program.command('add-a-storage-bucket')
    .description('Auto-generated command for add_a_storage_bucket')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_a_storage_bucket(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
