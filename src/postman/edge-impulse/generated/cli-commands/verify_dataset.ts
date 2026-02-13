import { Command } from 'commander';
  import { verify_dataset } from '../verify_dataset';

export function addVerify_datasetCommand(program: Command) {
  program.command('verify-dataset')
    .description('Auto-generated command for verify_dataset')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await verify_dataset(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'verify-dataset' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
