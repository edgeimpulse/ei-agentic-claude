import { Command } from 'commander';
  import { get_window_settings } from '../get_window_settings';

export function addGet_window_settingsCommand(program: Command) {
  program.command('get-window-settings')
    .description('Auto-generated command for get_window_settings')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_window_settings(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-window-settings' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
