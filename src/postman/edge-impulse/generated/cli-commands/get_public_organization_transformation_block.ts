import { Command } from 'commander';
  import { get_public_organization_transformation_block } from '../get_public_organization_transformation_block';

export function addGet_public_organization_transformation_blockCommand(program: Command) {
  program.command('get-public-organization-transformation-block')
    .description('Auto-generated command for get_public_organization_transformation_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_public_organization_transformation_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-public-organization-transformation-block' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
