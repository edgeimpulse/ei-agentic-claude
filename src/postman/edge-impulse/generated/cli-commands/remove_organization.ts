import { Command } from 'commander';
  import { remove_organization } from '../remove_organization';

export function addRemove_organizationCommand(program: Command) {
  program.command('remove-organization')
    .description('Auto-generated command for remove_organization')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await remove_organization(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'remove-organization' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
