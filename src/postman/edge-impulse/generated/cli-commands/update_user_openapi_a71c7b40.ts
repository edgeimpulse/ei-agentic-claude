import { Command } from 'commander';
  import { update_user_openapi_a71c7b40 } from '../update_user_openapi_a71c7b40';

export function addUpdate_user_openapi_a71c7b40Command(program: Command) {
  program.command('update-user-openapi-a71c7b40')
    .description('Auto-generated command for update_user_openapi_a71c7b40')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_user_openapi_a71c7b40(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-user-openapi-a71c7b40' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
