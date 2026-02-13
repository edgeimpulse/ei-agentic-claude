import { Command } from 'commander';
  import { get_model_variants } from '../get_model_variants';

export function addGet_model_variantsCommand(program: Command) {
  program.command('get-model-variants')
    .description('Auto-generated command for get_model_variants')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_model_variants(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-model-variants' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
