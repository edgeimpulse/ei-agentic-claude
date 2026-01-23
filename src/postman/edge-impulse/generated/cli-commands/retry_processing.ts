import { Command } from 'commander';
  import { retry_processing } from '../retry_processing';

export function addRetry_processingCommand(program: Command) {
  program.command('retry-processing')
    .description('Auto-generated command for retry_processing')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await retry_processing(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'retry-processing' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
