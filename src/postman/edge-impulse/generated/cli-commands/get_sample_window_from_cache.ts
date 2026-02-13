import { Command } from 'commander';
  import { get_sample_window_from_cache } from '../get_sample_window_from_cache';

export function addGet_sample_window_from_cacheCommand(program: Command) {
  program.command('get-sample-window-from-cache')
    .description('Auto-generated command for get_sample_window_from_cache')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_sample_window_from_cache(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-sample-window-from-cache' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
