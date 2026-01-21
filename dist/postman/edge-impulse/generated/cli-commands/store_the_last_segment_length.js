import { store_the_last_segment_length } from '../store_the_last_segment_length.ts';
export function addStore_the_last_segment_lengthCommand(program) {
    program.command('store-the-last-segment-length')
        .description('Auto-generated command for store_the_last_segment_length')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await store_the_last_segment_length(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
