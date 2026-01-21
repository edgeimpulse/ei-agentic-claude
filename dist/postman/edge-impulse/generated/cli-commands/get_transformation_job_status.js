import { get_transformation_job_status } from '../get_transformation_job_status.ts';
export function addGet_transformation_job_statusCommand(program) {
    program.command('get-transformation-job-status')
        .description('Auto-generated command for get_transformation_job_status')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_transformation_job_status(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
