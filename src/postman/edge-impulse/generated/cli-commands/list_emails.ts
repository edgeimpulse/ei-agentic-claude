import { Command } from 'commander';
  import { list_emails } from '../list_emails';

export function addList_emailsCommand(program: Command) {
  program.command('list-emails')
    .description('Auto-generated command for list_emails')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_emails(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
