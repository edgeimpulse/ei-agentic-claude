import { Command } from 'commander';
  import { clear_data_explorer } from '../clear_data_explorer';

export function addClear_data_explorerCommand(program: Command) {
  program.command('clear-data-explorer')
    .description('Auto-generated command for clear_data_explorer')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await clear_data_explorer(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'clear-data-explorer' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
