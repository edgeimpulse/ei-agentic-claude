import { Command } from 'commander';
  import { add_organization_data_campaign } from '../add_organization_data_campaign';

export function addAdd_organization_data_campaignCommand(program: Command) {
  program.command('add-organization-data-campaign')
    .description('Auto-generated command for add_organization_data_campaign')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_organization_data_campaign(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'add-organization-data-campaign' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
