import { evaluate_job_result } from '../evaluate_job_result.js';
export function addEvaluate_job_resultCommand(program) {
    program.command('evaluate-job-result')
        .description('Auto-generated command for evaluate_job_result')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await evaluate_job_result(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
