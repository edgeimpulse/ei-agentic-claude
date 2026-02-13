import { Command } from 'commander';
  import { get_profile_tflite_job_result } from '../get_profile_tflite_job_result';

export function addGet_profile_tflite_job_resultCommand(program: Command) {
  program.command('get-profile-tflite-job-result')
    .description('Auto-generated command for get_profile_tflite_job_result')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_profile_tflite_job_result(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-profile-tflite-job-result' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
