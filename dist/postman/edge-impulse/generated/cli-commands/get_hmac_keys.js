import { get_hmac_keys } from '../get_hmac_keys';
export function addGet_hmac_keysCommand(program) {
    program.command('get-hmac-keys')
        .description('Auto-generated command for get_hmac_keys')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_hmac_keys(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
