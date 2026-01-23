import { Command } from 'commander';
  import { get_user } from '../get_user';

export function addGet_userCommand(program: Command) {
  program.command('get-user')
    .description('Auto-generated command for get_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-user' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
