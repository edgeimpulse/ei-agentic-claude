import { Command } from 'commander';
  import { get_a_white_label_user } from '../get_a_white_label_user';

export function addGet_a_white_label_userCommand(program: Command) {
  program.command('get-a-white-label-user')
    .description('Auto-generated command for get_a_white_label_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_a_white_label_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
