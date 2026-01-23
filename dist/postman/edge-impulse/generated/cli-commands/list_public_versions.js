import { list_public_versions } from '../list_public_versions.js';
export function addList_public_versionsCommand(program) {
    program.command('list-public-versions')
        .description('Auto-generated command for list_public_versions')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await list_public_versions(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'list-public-versions' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
