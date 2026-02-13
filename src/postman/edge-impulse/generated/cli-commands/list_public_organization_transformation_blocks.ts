import { Command } from 'commander';
  import { list_public_organization_transformation_blocks } from '../list_public_organization_transformation_blocks';

export function addList_public_organization_transformation_blocksCommand(program: Command) {
  program.command('list-public-organization-transformation-blocks')
    .description('Auto-generated command for list_public_organization_transformation_blocks')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_public_organization_transformation_blocks(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-public-organization-transformation-blocks' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
