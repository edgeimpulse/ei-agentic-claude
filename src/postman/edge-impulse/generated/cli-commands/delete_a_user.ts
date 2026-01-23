import { Command } from 'commander';
  import { delete_a_user } from '../delete_a_user';

export function addDelete_a_userCommand(program: Command) {
  program.command('delete-a-user')
    .description('Auto-generated command for delete_a_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_a_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'delete-a-user' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
