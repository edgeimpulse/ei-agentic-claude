import { Command } from 'commander';
  import { whitelabel_admin_update_development_board_image } from '../whitelabel_admin_update_development_board_image';

export function addWhitelabel_admin_update_development_board_imageCommand(program: Command) {
  program.command('whitelabel-admin-update-development-board-image')
    .description('Auto-generated command for whitelabel_admin_update_development_board_image')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await whitelabel_admin_update_development_board_image(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'whitelabel-admin-update-development-board-image' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
