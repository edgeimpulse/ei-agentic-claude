import { Command } from 'commander';
  import { list_active_jobs_openapi_ef695b56 } from '../list_active_jobs_openapi_ef695b56';

export function addList_active_jobs_openapi_ef695b56Command(program: Command) {
  program.command('list-active-jobs-openapi-ef695b56')
    .description('Auto-generated command for list_active_jobs_openapi_ef695b56')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_active_jobs_openapi_ef695b56(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-active-jobs-openapi-ef695b56' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
