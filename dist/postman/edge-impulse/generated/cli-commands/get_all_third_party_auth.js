import { get_all_third_party_auth } from '../get_all_third_party_auth.ts';
export function addGet_all_third_party_authCommand(program) {
    program.command('get-all-third-party-auth')
        .description('Auto-generated command for get_all_third_party_auth')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_all_third_party_auth(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
