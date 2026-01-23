import { Command } from 'commander';
  import { get_buckets } from '../get_buckets';

export function addGet_bucketsCommand(program: Command) {
  program.command('get-buckets')
    .description('Auto-generated command for get_buckets')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_buckets(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-buckets' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
