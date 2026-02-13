import { Command } from 'commander';
  import { whitelabel_admin_add_project_api_key } from '../whitelabel_admin_add_project_api_key';

export function addWhitelabel_admin_add_project_api_keyCommand(program: Command) {
  program.command('whitelabel-admin-add-project-api-key')
    .description('Auto-generated command for whitelabel_admin_add_project_api_key')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_add_project_api_key(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-add-project-api-key' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
