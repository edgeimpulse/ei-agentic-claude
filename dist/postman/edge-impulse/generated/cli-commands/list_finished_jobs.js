import { list_finished_jobs } from '../list_finished_jobs.js';
export function addList_finished_jobsCommand(program) {
    program.command('list-finished-jobs')
        .description('Auto-generated command for list_finished_jobs')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await list_finished_jobs(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
