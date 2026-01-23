import { delete_versions } from '../delete_versions.js';
export function addDelete_versionsCommand(program) {
    program.command('delete-versions')
        .description('Auto-generated command for delete_versions')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await delete_versions(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'delete-versions' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
