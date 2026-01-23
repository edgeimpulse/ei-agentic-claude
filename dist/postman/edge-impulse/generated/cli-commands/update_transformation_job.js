import { update_transformation_job } from '../update_transformation_job.js';
export function addUpdate_transformation_jobCommand(program) {
    program.command('update-transformation-job')
        .description('Auto-generated command for update_transformation_job')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_transformation_job(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
