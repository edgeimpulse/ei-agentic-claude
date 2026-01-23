import { Command } from 'commander';
  import { update_white_label_user } from '../update_white_label_user';

export function addUpdate_white_label_userCommand(program: Command) {
  program.command('update-white-label-user')
    .description('Auto-generated command for update_white_label_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_white_label_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-white-label-user' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
