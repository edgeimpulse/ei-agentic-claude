import { classify_job_result } from '../classify_job_result.js';
export function addClassify_job_resultCommand(program) {
    program.command('classify-job-result')
        .description('Auto-generated command for classify_job_result')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await classify_job_result(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'classify-job-result' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
