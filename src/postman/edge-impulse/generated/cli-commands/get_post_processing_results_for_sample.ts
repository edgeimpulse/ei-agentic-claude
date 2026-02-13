import { Command } from 'commander';
  import { get_post_processing_results_for_sample } from '../get_post_processing_results_for_sample';

export function addGet_post_processing_results_for_sampleCommand(program: Command) {
  program.command('get-post-processing-results-for-sample')
    .description('Auto-generated command for get_post_processing_results_for_sample')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_post_processing_results_for_sample(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-post-processing-results-for-sample' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
