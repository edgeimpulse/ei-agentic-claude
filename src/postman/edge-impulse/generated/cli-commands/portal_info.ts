import { Command } from 'commander';
  import { portal_info } from '../portal_info';

export function addPortal_infoCommand(program: Command) {
  program.command('portal-info')
    .description('Auto-generated command for portal_info')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await portal_info(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
