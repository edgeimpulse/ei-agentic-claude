import { Command } from 'commander';
  import { set_post_processing_config } from '../set_post_processing_config';

export function addSet_post_processing_configCommand(program: Command) {
  program.command('set-post-processing-config')
    .description('Auto-generated command for set_post_processing_config')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await set_post_processing_config(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'set-post-processing-config' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
