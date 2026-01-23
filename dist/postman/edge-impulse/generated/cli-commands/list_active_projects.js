import { list_active_projects } from '../list_active_projects.js';
export function addList_active_projectsCommand(program) {
    program.command('list-active-projects')
        .description('Auto-generated command for list_active_projects')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await list_active_projects(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'list-active-projects' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
