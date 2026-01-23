import { list_versions } from '../list_versions.js';
export function addList_versionsCommand(program) {
    program.command('list-versions')
        .description('Auto-generated command for list_versions')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await list_versions(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'list-versions' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
