import { Command } from 'commander';
  import { list_all_jobs_openapi_e85f220e } from '../list_all_jobs_openapi_e85f220e';

export function addList_all_jobs_openapi_e85f220eCommand(program: Command) {
  program.command('list-all-jobs-openapi-e85f220e')
    .description('Auto-generated command for list_all_jobs_openapi_e85f220e')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_all_jobs_openapi_e85f220e(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-all-jobs-openapi-e85f220e' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
