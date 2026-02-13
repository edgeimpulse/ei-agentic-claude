import { Command } from 'commander';
  import { get_synthetic_data_config } from '../get_synthetic_data_config';

export function addGet_synthetic_data_configCommand(program: Command) {
  program.command('get-synthetic-data-config')
    .description('Auto-generated command for get_synthetic_data_config')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_synthetic_data_config(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-synthetic-data-config' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
