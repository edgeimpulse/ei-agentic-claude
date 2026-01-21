import { set_compute_time_limit } from '../set_compute_time_limit.ts';
export function addSet_compute_time_limitCommand(program) {
    program.command('set-compute-time-limit')
        .description('Auto-generated command for set_compute_time_limit')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await set_compute_time_limit(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
