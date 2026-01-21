import { upload_keras_files } from '../upload_keras_files.ts';
export function addUpload_keras_filesCommand(program) {
    program.command('upload-keras-files')
        .description('Auto-generated command for upload_keras_files')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await upload_keras_files(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
