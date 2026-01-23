import { get_processed_sample_slice } from '../get_processed_sample_slice.js';
export function addGet_processed_sample_sliceCommand(program) {
    program.command('get-processed-sample-slice')
        .description('Auto-generated command for get_processed_sample_slice')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_processed_sample_slice(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-processed-sample-slice' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
