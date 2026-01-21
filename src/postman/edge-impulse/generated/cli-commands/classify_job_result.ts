import { Command } from 'commander';
import { classify_job_result } from '../classify_job_result.ts';

export function addClassify_job_resultCommand(program: Command) {
  program.command('classify-job-result')
    .description('Auto-generated command for classify_job_result')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await classify_job_result(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
