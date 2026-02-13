import { Command } from 'commander';
  import { delete_organization_data_item } from '../delete_organization_data_item';

export function addDelete_organization_data_itemCommand(program: Command) {
  program.command('delete-organization-data-item')
    .description('Auto-generated command for delete_organization_data_item')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_organization_data_item(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'delete-organization-data-item' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
