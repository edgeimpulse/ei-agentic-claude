import { remove_user_from_a_project } from '../remove_user_from_a_project.js';
export function addRemove_user_from_a_projectCommand(program) {
    program.command('remove-user-from-a-project')
        .description('Auto-generated command for remove_user_from_a_project')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await remove_user_from_a_project(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'remove-user-from-a-project' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
