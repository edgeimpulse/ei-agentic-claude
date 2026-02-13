import { Command } from 'commander';
  import { update_organization_openapi_ffc64d28 } from '../update_organization_openapi_ffc64d28';

export function addUpdate_organization_openapi_ffc64d28Command(program: Command) {
  program.command('update-organization-openapi-ffc64d28')
    .description('Auto-generated command for update_organization_openapi_ffc64d28')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_organization_openapi_ffc64d28(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-organization-openapi-ffc64d28' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
