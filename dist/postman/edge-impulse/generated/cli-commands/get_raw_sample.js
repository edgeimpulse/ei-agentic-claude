import { get_raw_sample } from '../get_raw_sample.ts';
export function addGet_raw_sampleCommand(program) {
    program.command('get-raw-sample')
        .description('Auto-generated command for get_raw_sample')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_raw_sample(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
