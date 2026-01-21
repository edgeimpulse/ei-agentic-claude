import { profile_tflite_model } from '../profile_tflite_model.ts';
export function addProfile_tflite_modelCommand(program) {
    program.command('profile-tflite-model')
        .description('Auto-generated command for profile_tflite_model')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await profile_tflite_model(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
