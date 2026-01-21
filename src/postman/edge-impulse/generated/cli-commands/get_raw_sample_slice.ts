import { Command } from 'commander';
import { get_raw_sample_slice } from '../get_raw_sample_slice.ts';

export function addGet_raw_sample_sliceCommand(program: Command) {
  program.command('get-raw-sample-slice')
    .description('Auto-generated command for get_raw_sample_slice')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_raw_sample_slice(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
