import { train_model_keras } from '../train_model_keras.ts';
export function addTrain_model_kerasCommand(program) {
    program.command('train-model-keras')
        .description('Auto-generated command for train_model_keras')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await train_model_keras(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
