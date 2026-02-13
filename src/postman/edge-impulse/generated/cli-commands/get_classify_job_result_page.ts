import { Command } from 'commander';
  import { get_classify_job_result_page } from '../get_classify_job_result_page';

export function addGet_classify_job_result_pageCommand(program: Command) {
  program.command('get-classify-job-result-page')
    .description('Auto-generated command for get_classify_job_result_page')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_classify_job_result_page(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-classify-job-result-page' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
