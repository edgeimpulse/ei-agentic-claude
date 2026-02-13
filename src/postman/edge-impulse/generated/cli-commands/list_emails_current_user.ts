import { Command } from 'commander';
  import { list_emails_current_user } from '../list_emails_current_user';

export function addList_emails_current_userCommand(program: Command) {
  program.command('list-emails-current-user')
    .description('Auto-generated command for list_emails_current_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_emails_current_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-emails-current-user' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
