import { request_activation_code } from '../request_activation_code';
export function addRequest_activation_codeCommand(program) {
    program.command('request-activation-code')
        .description('Auto-generated command for request_activation_code')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await request_activation_code(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
