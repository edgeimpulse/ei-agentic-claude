import { Command } from 'commander';
  import { get_sample_as_raw } from '../get_sample_as_raw';

export function addGet_sample_as_rawCommand(program: Command) {
  program.command('get-sample-as-raw')
    .description('Auto-generated command for get_sample_as_raw')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_sample_as_raw(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-sample-as-raw' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
