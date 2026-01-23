import { sample_of_trained_features } from '../sample_of_trained_features.js';
export function addSample_of_trained_featuresCommand(program) {
    program.command('sample-of-trained-features')
        .description('Auto-generated command for sample_of_trained_features')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await sample_of_trained_features(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
