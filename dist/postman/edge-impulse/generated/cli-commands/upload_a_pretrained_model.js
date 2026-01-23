import { upload_a_pretrained_model } from '../upload_a_pretrained_model.js';
export function addUpload_a_pretrained_modelCommand(program) {
    program.command('upload-a-pretrained-model')
        .description('Auto-generated command for upload_a_pretrained_model')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await upload_a_pretrained_model(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
