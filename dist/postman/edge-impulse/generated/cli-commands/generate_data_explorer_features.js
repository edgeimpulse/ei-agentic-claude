import { generate_data_explorer_features } from '../generate_data_explorer_features.js';
export function addGenerate_data_explorer_featuresCommand(program) {
    program.command('generate-data-explorer-features')
        .description('Auto-generated command for generate_data_explorer_features')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await generate_data_explorer_features(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
