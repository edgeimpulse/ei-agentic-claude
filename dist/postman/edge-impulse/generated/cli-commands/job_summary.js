import { job_summary } from '../job_summary.js';
export function addJob_summaryCommand(program) {
    program.command('job-summary')
        .description('Auto-generated command for job_summary')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await job_summary(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'job-summary' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
