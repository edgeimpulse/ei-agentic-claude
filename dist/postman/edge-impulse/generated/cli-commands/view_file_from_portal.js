import { view_file_from_portal } from '../view_file_from_portal.js';
export function addView_file_from_portalCommand(program) {
    program.command('view-file-from-portal')
        .description('Auto-generated command for view_file_from_portal')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await view_file_from_portal(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
