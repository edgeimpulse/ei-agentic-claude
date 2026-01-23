import { Command } from 'commander';
  import { create_new_organization } from '../create_new_organization';

export function addCreate_new_organizationCommand(program: Command) {
  program.command('create-new-organization')
    .description('Auto-generated command for create_new_organization')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_new_organization(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-new-organization' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
