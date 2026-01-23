import { download_file_from_portal } from '../download_file_from_portal.js';
export function addDownload_file_from_portalCommand(program) {
    program.command('download-file-from-portal')
        .description('Auto-generated command for download_file_from_portal')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await download_file_from_portal(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
