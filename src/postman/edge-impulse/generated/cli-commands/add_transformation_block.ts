import { Command } from 'commander';
  import { add_transformation_block } from '../add_transformation_block';

export function addAdd_transformation_blockCommand(program: Command) {
  program.command('add-transformation-block')
    .description('Auto-generated command for add_transformation_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_transformation_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'add-transformation-block' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
