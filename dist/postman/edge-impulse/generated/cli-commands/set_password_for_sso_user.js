import { set_password_for_sso_user } from '../set_password_for_sso_user.js';
export function addSet_password_for_sso_userCommand(program) {
    program.command('set-password-for-sso-user')
        .description('Auto-generated command for set_password_for_sso_user')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await set_password_for_sso_user(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
