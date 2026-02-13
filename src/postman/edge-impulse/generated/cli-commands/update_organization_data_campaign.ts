import { Command } from 'commander';
  import { update_organization_data_campaign } from '../update_organization_data_campaign';

export function addUpdate_organization_data_campaignCommand(program: Command) {
  program.command('update-organization-data-campaign')
    .description('Auto-generated command for update_organization_data_campaign')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_organization_data_campaign(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-organization-data-campaign' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
