import { retrieve_upload_portal_information } from '../retrieve_upload_portal_information.js';
export function addRetrieve_upload_portal_informationCommand(program) {
    program.command('retrieve-upload-portal-information')
        .description('Auto-generated command for retrieve_upload_portal_information')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await retrieve_upload_portal_information(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'retrieve-upload-portal-information' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
