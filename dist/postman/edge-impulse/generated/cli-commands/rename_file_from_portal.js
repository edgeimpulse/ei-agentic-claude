import { rename_file_from_portal } from '../rename_file_from_portal.ts';
export function addRename_file_from_portalCommand(program) {
    program.command('rename-file-from-portal')
        .description('Auto-generated command for rename_file_from_portal')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await rename_file_from_portal(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
