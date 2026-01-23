import { get_global_metrics } from '../get_global_metrics.js';
export function addGet_global_metricsCommand(program) {
    program.command('get-global-metrics')
        .description('Auto-generated command for get_global_metrics')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_global_metrics(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
