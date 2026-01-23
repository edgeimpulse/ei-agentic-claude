import { Command } from 'commander';
  import { get_jwt_token } from '../get_jwt_token';

export function addGet_jwt_tokenCommand(program: Command) {
  program.command('get-jwt-token')
    .description('Auto-generated command for get_jwt_token')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_jwt_token(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
