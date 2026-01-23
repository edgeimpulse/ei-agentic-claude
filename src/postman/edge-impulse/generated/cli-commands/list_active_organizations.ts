import { Command } from 'commander';
  import { list_active_organizations } from '../list_active_organizations';

export function addList_active_organizationsCommand(program: Command) {
  program.command('list-active-organizations')
    .description('Auto-generated command for list_active_organizations')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_active_organizations(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
