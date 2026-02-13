import { Command } from 'commander';
  import { get_data_explorer_features_openapi_9cb03c47 } from '../get_data_explorer_features_openapi_9cb03c47';

export function addGet_data_explorer_features_openapi_9cb03c47Command(program: Command) {
  program.command('get-data-explorer-features-openapi-9cb03c47')
    .description('Auto-generated command for get_data_explorer_features_openapi_9cb03c47')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_data_explorer_features_openapi_9cb03c47(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-data-explorer-features-openapi-9cb03c47' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
