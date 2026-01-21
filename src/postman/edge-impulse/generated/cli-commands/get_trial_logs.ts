import { Command } from 'commander';
import { get_trial_logs } from '../get_trial_logs.ts';

export function addGet_trial_logsCommand(program: Command) {
  program.command('get-trial-logs')
    .description('Auto-generated command for get_trial_logs')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_trial_logs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
