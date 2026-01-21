import { Command } from 'commander';
import { check_evaluate_job_result_cache } from '../check_evaluate_job_result_cache.ts';

export function addCheck_evaluate_job_result_cacheCommand(program: Command) {
  program.command('check-evaluate-job-result-cache')
    .description('Auto-generated command for check_evaluate_job_result_cache')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await check_evaluate_job_result_cache(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
