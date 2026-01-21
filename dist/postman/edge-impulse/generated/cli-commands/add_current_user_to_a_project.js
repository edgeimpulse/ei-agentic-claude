import { add_current_user_to_a_project } from '../add_current_user_to_a_project.ts';
export function addAdd_current_user_to_a_projectCommand(program) {
    program.command('add-current-user-to-a-project')
        .description('Auto-generated command for add_current_user_to_a_project')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await add_current_user_to_a_project(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
