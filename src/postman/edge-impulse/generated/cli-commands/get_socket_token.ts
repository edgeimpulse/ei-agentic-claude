import { Command } from 'commander';
  import { get_socket_token } from '../get_socket_token';

export function addGet_socket_tokenCommand(program: Command) {
  program.command('get-socket-token')
    .description('Auto-generated command for get_socket_token')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_socket_token(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-socket-token' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
