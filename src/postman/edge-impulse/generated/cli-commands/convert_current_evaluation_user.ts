import { Command } from 'commander';
  import { convert_current_evaluation_user } from '../convert_current_evaluation_user';

export function addConvert_current_evaluation_userCommand(program: Command) {
  program.command('convert-current-evaluation-user')
    .description('Auto-generated command for convert_current_evaluation_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await convert_current_evaluation_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
