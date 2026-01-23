import { refresh_data } from '../refresh_data.js';
export function addRefresh_dataCommand(program) {
    program.command('refresh-data')
        .description('Auto-generated command for refresh_data')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await refresh_data(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'refresh-data' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
