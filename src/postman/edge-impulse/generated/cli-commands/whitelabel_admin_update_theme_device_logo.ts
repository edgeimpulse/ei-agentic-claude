import { Command } from 'commander';
  import { whitelabel_admin_update_theme_device_logo } from '../whitelabel_admin_update_theme_device_logo';

export function addWhitelabel_admin_update_theme_device_logoCommand(program: Command) {
  program.command('whitelabel-admin-update-theme-device-logo')
    .description('Auto-generated command for whitelabel_admin_update_theme_device_logo')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_update_theme_device_logo(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-update-theme-device-logo' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
