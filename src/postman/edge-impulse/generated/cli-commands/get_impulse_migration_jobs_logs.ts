import { Command } from 'commander';
  import { get_impulse_migration_jobs_logs } from '../get_impulse_migration_jobs_logs';

export function addGet_impulse_migration_jobs_logsCommand(program: Command) {
  program.command('get-impulse-migration-jobs-logs')
    .description('Auto-generated command for get_impulse_migration_jobs_logs')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_impulse_migration_jobs_logs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-impulse-migration-jobs-logs' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
