import { Command } from 'commander';
  import { get_transformation_blocks } from '../get_transformation_blocks';

export function addGet_transformation_blocksCommand(program: Command) {
  program.command('get-transformation-blocks')
    .description('Auto-generated command for get_transformation_blocks')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_transformation_blocks(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
