import { get_public_metrics } from '../get_public_metrics.js';
export function addGet_public_metricsCommand(program) {
    program.command('get-public-metrics')
        .description('Auto-generated command for get_public_metrics')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_public_metrics(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-public-metrics' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
