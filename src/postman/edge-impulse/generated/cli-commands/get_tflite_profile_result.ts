import { Command } from 'commander';
import { get_tflite_profile_result } from '../get_tflite_profile_result.ts';

export function addGet_tflite_profile_resultCommand(program: Command) {
  program.command('get-tflite-profile-result')
    .description('Auto-generated command for get_tflite_profile_result')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_tflite_profile_result(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
