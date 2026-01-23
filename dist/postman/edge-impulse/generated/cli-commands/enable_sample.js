import { enable_sample } from '../enable_sample.js';
export function addEnable_sampleCommand(program) {
    program.command('enable-sample')
        .description('Auto-generated command for enable_sample')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await enable_sample(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'enable-sample' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
