import { list_upload_portals } from '../list_upload_portals.js';
export function addList_upload_portalsCommand(program) {
    program.command('list-upload-portals')
        .description('Auto-generated command for list_upload_portals')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await list_upload_portals(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'list-upload-portals' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
