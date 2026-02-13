import { Command } from 'commander';
  import { get_all_impulses } from '../get_all_impulses';

export function addGet_all_impulsesCommand(program: Command) {
  program.command('get-all-impulses')
    .description('Auto-generated command for get_all_impulses')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_all_impulses(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-all-impulses' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
