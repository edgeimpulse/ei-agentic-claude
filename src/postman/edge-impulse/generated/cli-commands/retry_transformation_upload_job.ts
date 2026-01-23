import { Command } from 'commander';
  import { retry_transformation_upload_job } from '../retry_transformation_upload_job';

export function addRetry_transformation_upload_jobCommand(program: Command) {
  program.command('retry-transformation-upload-job')
    .description('Auto-generated command for retry_transformation_upload_job')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await retry_transformation_upload_job(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
