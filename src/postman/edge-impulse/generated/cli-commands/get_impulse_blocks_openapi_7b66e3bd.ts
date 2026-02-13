import { Command } from 'commander';
  import { get_impulse_blocks_openapi_7b66e3bd } from '../get_impulse_blocks_openapi_7b66e3bd';

export function addGet_impulse_blocks_openapi_7b66e3bdCommand(program: Command) {
  program.command('get-impulse-blocks-openapi-7b66e3bd')
    .description('Auto-generated command for get_impulse_blocks_openapi_7b66e3bd')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_impulse_blocks_openapi_7b66e3bd(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-impulse-blocks-openapi-7b66e3bd' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
