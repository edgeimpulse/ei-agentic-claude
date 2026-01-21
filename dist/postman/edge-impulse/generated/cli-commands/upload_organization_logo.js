import { upload_organization_logo } from '../upload_organization_logo.ts';
export function addUpload_organization_logoCommand(program) {
    program.command('upload-organization-logo')
        .description('Auto-generated command for upload_organization_logo')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await upload_organization_logo(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
