import { Command } from 'commander';
  import { get_gmm_metadata } from '../get_gmm_metadata';

export function addGet_gmm_metadataCommand(program: Command) {
  program.command('get-gmm-metadata')
    .description('Auto-generated command for get_gmm_metadata')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_gmm_metadata(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-gmm-metadata' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
