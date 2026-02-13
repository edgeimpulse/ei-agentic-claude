import { Command } from 'commander';
  import { export_organization_transformation_block } from '../export_organization_transformation_block';

export function addExport_organization_transformation_blockCommand(program: Command) {
  program.command('export-organization-transformation-block')
    .description('Auto-generated command for export_organization_transformation_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await export_organization_transformation_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'export-organization-transformation-block' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
