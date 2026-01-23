import { upload_a_custom_block } from '../upload_a_custom_block.js';
export function addUpload_a_custom_blockCommand(program) {
    program.command('upload-a-custom-block')
        .description('Auto-generated command for upload_a_custom_block')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await upload_a_custom_block(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
