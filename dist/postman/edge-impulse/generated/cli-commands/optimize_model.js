import { optimize_model } from '../optimize_model.js';
export function addOptimize_modelCommand(program) {
    program.command('optimize-model')
        .description('Auto-generated command for optimize_model')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await optimize_model(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'optimize-model' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
