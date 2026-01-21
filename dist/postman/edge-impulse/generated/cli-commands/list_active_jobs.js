import { list_active_jobs } from '../list_active_jobs.ts';
export function addList_active_jobsCommand(program) {
    program.command('list-active-jobs')
        .description('Auto-generated command for list_active_jobs')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await list_active_jobs(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
