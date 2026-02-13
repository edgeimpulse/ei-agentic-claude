import { Command } from 'commander';
  import { classify_sample_for_variants } from '../classify_sample_for_variants';

export function addClassify_sample_for_variantsCommand(program: Command) {
  program.command('classify-sample-for-variants')
    .description('Auto-generated command for classify_sample_for_variants')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await classify_sample_for_variants(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'classify-sample-for-variants' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
