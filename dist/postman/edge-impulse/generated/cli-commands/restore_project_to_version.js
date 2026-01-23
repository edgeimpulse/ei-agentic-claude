import { restore_project_to_version } from '../restore_project_to_version.js';
export function addRestore_project_to_versionCommand(program) {
    program.command('restore-project-to-version')
        .description('Auto-generated command for restore_project_to_version')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await restore_project_to_version(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'restore-project-to-version' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
