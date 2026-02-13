import { Command } from 'commander';
  import { get_organization_info } from '../get_organization_info';

export function addGet_organization_infoCommand(program: Command) {
  program.command('get-organization-info')
    .description('Auto-generated command for get_organization_info')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_organization_info(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-organization-info' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
