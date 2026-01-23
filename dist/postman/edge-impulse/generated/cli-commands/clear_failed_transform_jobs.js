import { clear_failed_transform_jobs } from '../clear_failed_transform_jobs.js';
export function addClear_failed_transform_jobsCommand(program) {
    program.command('clear-failed-transform-jobs')
        .description('Auto-generated command for clear_failed_transform_jobs')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await clear_failed_transform_jobs(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'clear-failed-transform-jobs' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
