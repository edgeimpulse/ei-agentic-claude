import { remove_user_from_a_project } from '../remove_user_from_a_project.ts';
export function addRemove_user_from_a_projectCommand(program) {
    program.command('remove-user-from-a-project')
        .description('Auto-generated command for remove_user_from_a_project')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await remove_user_from_a_project(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
