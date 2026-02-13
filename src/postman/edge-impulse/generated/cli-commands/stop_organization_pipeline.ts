import { Command } from 'commander';
  import { stop_organization_pipeline } from '../stop_organization_pipeline';

export function addStop_organization_pipelineCommand(program: Command) {
  program.command('stop-organization-pipeline')
    .description('Auto-generated command for stop_organization_pipeline')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await stop_organization_pipeline(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'stop-organization-pipeline' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
