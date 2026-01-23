import { check_evaluate_job_result_cache } from '../check_evaluate_job_result_cache.js';
export function addCheck_evaluate_job_result_cacheCommand(program) {
    program.command('check-evaluate-job-result-cache')
        .description('Auto-generated command for check_evaluate_job_result_cache')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await check_evaluate_job_result_cache(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'check-evaluate-job-result-cache' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
