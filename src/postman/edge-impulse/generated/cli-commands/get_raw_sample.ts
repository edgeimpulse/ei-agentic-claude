import { Command } from 'commander';
  import { get_raw_sample } from '../get_raw_sample';

export function addGet_raw_sampleCommand(program: Command) {
  program.command('get-raw-sample')
    .description('Auto-generated command for get_raw_sample')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_raw_sample(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-raw-sample' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
