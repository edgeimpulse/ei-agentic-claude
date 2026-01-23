import { delete_third_party_auth } from '../delete_third_party_auth.js';
export function addDelete_third_party_authCommand(program) {
    program.command('delete-third-party-auth')
        .description('Auto-generated command for delete_third_party_auth')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await delete_third_party_auth(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'delete-third-party-auth' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
