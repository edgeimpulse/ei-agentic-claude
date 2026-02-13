import { Command } from 'commander';
  import { get_sample_metadata_filter_options } from '../get_sample_metadata_filter_options';

export function addGet_sample_metadata_filter_optionsCommand(program: Command) {
  program.command('get-sample-metadata-filter-options')
    .description('Auto-generated command for get_sample_metadata_filter_options')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_sample_metadata_filter_options(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-sample-metadata-filter-options' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
