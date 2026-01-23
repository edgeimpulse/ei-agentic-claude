import { get_third_party_auth } from '../get_third_party_auth';
export function addGet_third_party_authCommand(program) {
    program.command('get-third-party-auth')
        .description('Auto-generated command for get_third_party_auth')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_third_party_auth(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
