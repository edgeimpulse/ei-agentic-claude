import { count_samples } from '../count_samples.js';
export function addCount_samplesCommand(program) {
    program.command('count-samples')
        .description('Auto-generated command for count_samples')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await count_samples(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'count-samples' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
