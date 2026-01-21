import { rotate_upload_portal_token } from '../rotate_upload_portal_token.ts';
export function addRotate_upload_portal_tokenCommand(program) {
    program.command('rotate-upload-portal-token')
        .description('Auto-generated command for rotate_upload_portal_token')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await rotate_upload_portal_token(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
