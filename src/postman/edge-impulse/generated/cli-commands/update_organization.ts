import { Command } from 'commander';
  import { update_organization } from '../update_organization';

export function addUpdate_organizationCommand(program: Command) {
  program.command('update-organization')
    .description('Auto-generated command for update_organization')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_organization(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-organization' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
