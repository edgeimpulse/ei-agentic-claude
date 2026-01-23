import { retry_failed_transform_jobs } from '../retry_failed_transform_jobs.js';
export function addRetry_failed_transform_jobsCommand(program) {
    program.command('retry-failed-transform-jobs')
        .description('Auto-generated command for retry_failed_transform_jobs')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await retry_failed_transform_jobs(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'retry-failed-transform-jobs' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
