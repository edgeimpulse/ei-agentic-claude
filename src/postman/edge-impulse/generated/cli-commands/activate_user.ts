import { Command } from 'commander';
  import { activate_user } from '../activate_user';

export function addActivate_userCommand(program: Command) {
  program.command('activate-user')
    .description('Auto-generated command for activate_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await activate_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'activate-user' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
