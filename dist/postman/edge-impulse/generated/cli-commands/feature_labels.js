import { feature_labels } from '../feature_labels.js';
export function addFeature_labelsCommand(program) {
    program.command('feature-labels')
        .description('Auto-generated command for feature_labels')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await feature_labels(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'feature-labels' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
