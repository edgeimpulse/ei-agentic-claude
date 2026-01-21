import { upload_image_for_readme } from '../upload_image_for_readme.ts';
export function addUpload_image_for_readmeCommand(program) {
    program.command('upload-image-for-readme')
        .description('Auto-generated command for upload_image_for_readme')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await upload_image_for_readme(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
