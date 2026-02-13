import { Command } from 'commander';
  import { get_impulse_records } from '../get_impulse_records';

export function addGet_impulse_recordsCommand(program: Command) {
  program.command('get-impulse-records')
    .description('Auto-generated command for get_impulse_records')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_impulse_records(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-impulse-records' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
