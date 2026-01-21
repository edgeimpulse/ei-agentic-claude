import { get_socket_token_for_an_organization } from '../get_socket_token_for_an_organization.ts';
export function addGet_socket_token_for_an_organizationCommand(program) {
    program.command('get-socket-token-for-an-organization')
        .description('Auto-generated command for get_socket_token_for_an_organization')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_socket_token_for_an_organization(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
