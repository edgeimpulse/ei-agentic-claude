import { Command } from 'commander';
  import { user_dismiss_notification } from '../user_dismiss_notification';

export function addUser_dismiss_notificationCommand(program: Command) {
  program.command('user-dismiss-notification')
    .description('Auto-generated command for user_dismiss_notification')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await user_dismiss_notification(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'user-dismiss-notification' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
