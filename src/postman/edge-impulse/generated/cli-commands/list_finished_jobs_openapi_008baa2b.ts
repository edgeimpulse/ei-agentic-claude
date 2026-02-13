import { Command } from 'commander';
  import { list_finished_jobs_openapi_008baa2b } from '../list_finished_jobs_openapi_008baa2b';

export function addList_finished_jobs_openapi_008baa2bCommand(program: Command) {
  program.command('list-finished-jobs-openapi-008baa2b')
    .description('Auto-generated command for list_finished_jobs_openapi_008baa2b')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_finished_jobs_openapi_008baa2b(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-finished-jobs-openapi-008baa2b' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
