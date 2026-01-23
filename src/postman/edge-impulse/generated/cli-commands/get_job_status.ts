import { Command } from 'commander';
  import { get_job_status } from '../get_job_status';

export function addGet_job_statusCommand(program: Command) {
  program.command('get-job-status')
    .description('Auto-generated command for get_job_status')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_job_status(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
