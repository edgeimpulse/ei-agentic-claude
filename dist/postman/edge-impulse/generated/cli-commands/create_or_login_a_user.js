import { create_or_login_a_user } from '../create_or_login_a_user.js';
export function addCreate_or_login_a_userCommand(program) {
    program.command('create-or-login-a-user')
        .description('Auto-generated command for create_or_login_a_user')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await create_or_login_a_user(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
