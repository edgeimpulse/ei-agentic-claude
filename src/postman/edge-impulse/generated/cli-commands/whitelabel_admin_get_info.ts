import { Command } from 'commander';
  import { whitelabel_admin_get_info } from '../whitelabel_admin_get_info';

export function addWhitelabel_admin_get_infoCommand(program: Command) {
  program.command('whitelabel-admin-get-info')
    .description('Auto-generated command for whitelabel_admin_get_info')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_get_info(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-get-info' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
