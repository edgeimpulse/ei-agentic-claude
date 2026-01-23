import { create_new_project } from '../create_new_project.js';
export function addCreate_new_projectCommand(program) {
    program.command('create-new-project')
        .description('Auto-generated command for create_new_project')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await create_new_project(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'create-new-project' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
