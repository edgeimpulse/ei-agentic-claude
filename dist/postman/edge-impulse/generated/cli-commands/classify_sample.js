import { classify_sample } from '../classify_sample.js';
export function addClassify_sampleCommand(program) {
    program.command('classify-sample')
        .description('Auto-generated command for classify_sample')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await classify_sample(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'classify-sample' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
