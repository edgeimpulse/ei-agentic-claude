import { change_password_current_user } from '../change_password_current_user.ts';
export function addChange_password_current_userCommand(program) {
    program.command('change-password-current-user')
        .description('Auto-generated command for change_password_current_user')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await change_password_current_user(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
