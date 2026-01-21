import { get_user_by_third_party_activation_code } from '../get_user_by_third_party_activation_code.ts';
export function addGet_user_by_third_party_activation_codeCommand(program) {
    program.command('get-user-by-third-party-activation-code')
        .description('Auto-generated command for get_user_by_third_party_activation_code')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_user_by_third_party_activation_code(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
