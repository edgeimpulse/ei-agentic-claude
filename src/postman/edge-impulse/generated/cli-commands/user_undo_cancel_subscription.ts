import { Command } from 'commander';
  import { user_undo_cancel_subscription } from '../user_undo_cancel_subscription';

export function addUser_undo_cancel_subscriptionCommand(program: Command) {
  program.command('user-undo-cancel-subscription')
    .description('Auto-generated command for user_undo_cancel_subscription')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await user_undo_cancel_subscription(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'user-undo-cancel-subscription' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
