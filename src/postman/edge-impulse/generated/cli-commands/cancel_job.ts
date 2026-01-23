import { Command } from 'commander';
  import { cancel_job } from '../cancel_job';

export function addCancel_jobCommand(program: Command) {
  program.command('cancel-job')
    .description('Auto-generated command for cancel_job')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await cancel_job(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'cancel-job' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
