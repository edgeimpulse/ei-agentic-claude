import { Command } from 'commander';
  import { get_performance_all_variants } from '../get_performance_all_variants';

export function addGet_performance_all_variantsCommand(program: Command) {
  program.command('get-performance-all-variants')
    .description('Auto-generated command for get_performance_all_variants')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_performance_all_variants(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-performance-all-variants' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
