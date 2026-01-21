import { get_socket_token } from '../get_socket_token.ts';
export function addGet_socket_tokenCommand(program) {
    program.command('get-socket-token')
        .description('Auto-generated command for get_socket_token')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_socket_token(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
