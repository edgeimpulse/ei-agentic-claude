import { get_all_white_label_projects } from '../get_all_white_label_projects.js';
export function addGet_all_white_label_projectsCommand(program) {
    program.command('get-all-white-label-projects')
        .description('Auto-generated command for get_all_white_label_projects')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_all_white_label_projects(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-all-white-label-projects' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
