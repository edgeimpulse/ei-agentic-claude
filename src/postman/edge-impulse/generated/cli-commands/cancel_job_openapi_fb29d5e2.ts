import { Command } from 'commander';
  import { cancel_job_openapi_fb29d5e2 } from '../cancel_job_openapi_fb29d5e2';

export function addCancel_job_openapi_fb29d5e2Command(program: Command) {
  program.command('cancel-job-openapi-fb29d5e2')
    .description('Auto-generated command for cancel_job_openapi_fb29d5e2')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await cancel_job_openapi_fb29d5e2(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'cancel-job-openapi-fb29d5e2' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
