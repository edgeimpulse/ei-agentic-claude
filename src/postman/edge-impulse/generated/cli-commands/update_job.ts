import { Command } from 'commander';
  import { update_job } from '../update_job';

export function addUpdate_jobCommand(program: Command) {
  program.command('update-job')
    .description('Auto-generated command for update_job')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_job(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-job' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
