import { Command } from 'commander';
  import { start_post_processing_job } from '../start_post_processing_job';

export function addStart_post_processing_jobCommand(program: Command) {
  program.command('start-post-processing-job')
    .description('Auto-generated command for start_post_processing_job')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await start_post_processing_job(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'start-post-processing-job' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
