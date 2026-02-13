import { Command } from 'commander';
  import { get_organization_data_campaign_dashboards } from '../get_organization_data_campaign_dashboards';

export function addGet_organization_data_campaign_dashboardsCommand(program: Command) {
  program.command('get-organization-data-campaign-dashboards')
    .description('Auto-generated command for get_organization_data_campaign_dashboards')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_organization_data_campaign_dashboards(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-organization-data-campaign-dashboards' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
