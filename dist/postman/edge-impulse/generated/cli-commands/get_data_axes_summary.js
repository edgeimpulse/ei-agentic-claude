import { get_data_axes_summary } from '../get_data_axes_summary.js';
export function addGet_data_axes_summaryCommand(program) {
    program.command('get-data-axes-summary')
        .description('Auto-generated command for get_data_axes_summary')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_data_axes_summary(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-data-axes-summary' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
