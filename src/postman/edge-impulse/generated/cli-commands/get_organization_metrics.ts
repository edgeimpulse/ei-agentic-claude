import { Command } from 'commander';
  import { get_organization_metrics } from '../get_organization_metrics';

export function addGet_organization_metricsCommand(program: Command) {
  program.command('get-organization-metrics')
    .description('Auto-generated command for get_organization_metrics')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_organization_metrics(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-organization-metrics' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
