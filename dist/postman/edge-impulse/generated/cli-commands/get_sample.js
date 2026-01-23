import { get_sample } from '../get_sample.js';
export function addGet_sampleCommand(program) {
    program.command('get-sample')
        .description('Auto-generated command for get_sample')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_sample(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-sample' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
