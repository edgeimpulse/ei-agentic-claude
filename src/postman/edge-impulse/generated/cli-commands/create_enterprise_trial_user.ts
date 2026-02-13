import { Command } from 'commander';
  import { create_enterprise_trial_user } from '../create_enterprise_trial_user';

export function addCreate_enterprise_trial_userCommand(program: Command) {
  program.command('create-enterprise-trial-user')
    .description('Auto-generated command for create_enterprise_trial_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_enterprise_trial_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-enterprise-trial-user' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
