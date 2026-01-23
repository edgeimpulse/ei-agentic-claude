import { get_sample_slice } from '../get_sample_slice.js';
export function addGet_sample_sliceCommand(program) {
    program.command('get-sample-slice')
        .description('Auto-generated command for get_sample_slice')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_sample_slice(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
