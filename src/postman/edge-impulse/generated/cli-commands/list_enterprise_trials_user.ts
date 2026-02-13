import { Command } from 'commander';
  import { list_enterprise_trials_user } from '../list_enterprise_trials_user';

export function addList_enterprise_trials_userCommand(program: Command) {
  program.command('list-enterprise-trials-user')
    .description('Auto-generated command for list_enterprise_trials_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_enterprise_trials_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-enterprise-trials-user' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
