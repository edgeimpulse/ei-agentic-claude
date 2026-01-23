import { verify_reset_password_code } from '../verify_reset_password_code.js';
export function addVerify_reset_password_codeCommand(program) {
    program.command('verify-reset-password-code')
        .description('Auto-generated command for verify_reset_password_code')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await verify_reset_password_code(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
