import { retrieves_available_transfer_learning_models } from '../retrieves_available_transfer_learning_models';
export function addRetrieves_available_transfer_learning_modelsCommand(program) {
    program.command('retrieves-available-transfer-learning-models')
        .description('Auto-generated command for retrieves_available_transfer_learning_models')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await retrieves_available_transfer_learning_models(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
