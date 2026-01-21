import { request_reset_password } from '../request_reset_password.ts';
export function addRequest_reset_passwordCommand(program) {
    program.command('request-reset-password')
        .description('Auto-generated command for request_reset_password')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await request_reset_password(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
