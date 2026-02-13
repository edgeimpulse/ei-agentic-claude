import { Command } from 'commander';
  import { whitelabel_admin_delete_user } from '../whitelabel_admin_delete_user';

export function addWhitelabel_admin_delete_userCommand(program: Command) {
  program.command('whitelabel-admin-delete-user')
    .description('Auto-generated command for whitelabel_admin_delete_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_delete_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-delete-user' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
