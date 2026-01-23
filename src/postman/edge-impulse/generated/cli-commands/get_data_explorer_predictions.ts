import { Command } from 'commander';
  import { get_data_explorer_predictions } from '../get_data_explorer_predictions';

export function addGet_data_explorer_predictionsCommand(program: Command) {
  program.command('get-data-explorer-predictions')
    .description('Auto-generated command for get_data_explorer_predictions')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_data_explorer_predictions(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-data-explorer-predictions' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
