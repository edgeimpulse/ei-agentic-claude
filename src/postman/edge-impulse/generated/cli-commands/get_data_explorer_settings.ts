import { Command } from 'commander';
  import { get_data_explorer_settings } from '../get_data_explorer_settings';

export function addGet_data_explorer_settingsCommand(program: Command) {
  program.command('get-data-explorer-settings')
    .description('Auto-generated command for get_data_explorer_settings')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_data_explorer_settings(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-data-explorer-settings' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
