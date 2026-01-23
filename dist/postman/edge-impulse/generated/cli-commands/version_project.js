import { version_project } from '../version_project.js';
export function addVersion_projectCommand(program) {
    program.command('version-project')
        .description('Auto-generated command for version_project')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await version_project(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'version-project' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
