import { Command } from 'commander';
  import { get_user_openapi_1df37143 } from '../get_user_openapi_1df37143';

export function addGet_user_openapi_1df37143Command(program: Command) {
  program.command('get-user-openapi-1df37143')
    .description('Auto-generated command for get_user_openapi_1df37143')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_user_openapi_1df37143(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-user-openapi-1df37143' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
