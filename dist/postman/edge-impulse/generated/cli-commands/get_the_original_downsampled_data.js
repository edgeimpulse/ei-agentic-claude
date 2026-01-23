import { get_the_original_downsampled_data } from '../get_the_original_downsampled_data.js';
export function addGet_the_original_downsampled_dataCommand(program) {
    program.command('get-the-original-downsampled-data')
        .description('Auto-generated command for get_the_original_downsampled_data')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_the_original_downsampled_data(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-the-original-downsampled-data' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
