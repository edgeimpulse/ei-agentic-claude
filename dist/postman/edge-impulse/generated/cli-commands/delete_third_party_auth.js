import { delete_third_party_auth } from '../delete_third_party_auth.ts';
export function addDelete_third_party_authCommand(program) {
    program.command('delete-third-party-auth')
        .description('Auto-generated command for delete_third_party_auth')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await delete_third_party_auth(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
