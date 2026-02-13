import { Command } from 'commander';
  import { get_job_status_openapi_b8230c81 } from '../get_job_status_openapi_b8230c81';

export function addGet_job_status_openapi_b8230c81Command(program: Command) {
  program.command('get-job-status-openapi-b8230c81')
    .description('Auto-generated command for get_job_status_openapi_b8230c81')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_job_status_openapi_b8230c81(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-job-status-openapi-b8230c81' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
