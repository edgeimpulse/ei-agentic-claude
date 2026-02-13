import { Command } from 'commander';
  import { user_upgrade_subscription } from '../user_upgrade_subscription';

export function addUser_upgrade_subscriptionCommand(program: Command) {
  program.command('user-upgrade-subscription')
    .description('Auto-generated command for user_upgrade_subscription')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await user_upgrade_subscription(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'user-upgrade-subscription' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
