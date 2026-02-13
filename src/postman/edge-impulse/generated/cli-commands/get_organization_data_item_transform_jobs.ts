import { Command } from 'commander';
  import { get_organization_data_item_transform_jobs } from '../get_organization_data_item_transform_jobs';

export function addGet_organization_data_item_transform_jobsCommand(program: Command) {
  program.command('get-organization-data-item-transform-jobs')
    .description('Auto-generated command for get_organization_data_item_transform_jobs')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_organization_data_item_transform_jobs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-organization-data-item-transform-jobs' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
