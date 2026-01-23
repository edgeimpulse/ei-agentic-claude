import { list_transformation_jobs } from '../list_transformation_jobs.js';
export function addList_transformation_jobsCommand(program) {
    program.command('list-transformation-jobs')
        .description('Auto-generated command for list_transformation_jobs')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await list_transformation_jobs(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'list-transformation-jobs' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
