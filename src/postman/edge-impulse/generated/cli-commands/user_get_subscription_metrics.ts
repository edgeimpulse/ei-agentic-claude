import { Command } from 'commander';
  import { user_get_subscription_metrics } from '../user_get_subscription_metrics';

export function addUser_get_subscription_metricsCommand(program: Command) {
  program.command('user-get-subscription-metrics')
    .description('Auto-generated command for user_get_subscription_metrics')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await user_get_subscription_metrics(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'user-get-subscription-metrics' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
