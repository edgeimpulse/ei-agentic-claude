import { give_access_to_project } from '../give_access_to_project.js';
export function addGive_access_to_projectCommand(program) {
    program.command('give-access-to-project')
        .description('Auto-generated command for give_access_to_project')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await give_access_to_project(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'give-access-to-project' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
