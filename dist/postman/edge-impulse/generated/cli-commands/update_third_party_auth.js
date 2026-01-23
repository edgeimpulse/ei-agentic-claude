import { update_third_party_auth } from '../update_third_party_auth.js';
export function addUpdate_third_party_authCommand(program) {
    program.command('update-third-party-auth')
        .description('Auto-generated command for update_third_party_auth')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_third_party_auth(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
