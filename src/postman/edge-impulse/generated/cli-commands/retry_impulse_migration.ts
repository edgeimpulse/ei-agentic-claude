import { Command } from 'commander';
  import { retry_impulse_migration } from '../retry_impulse_migration';

export function addRetry_impulse_migrationCommand(program: Command) {
  program.command('retry-impulse-migration')
    .description('Auto-generated command for retry_impulse_migration')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await retry_impulse_migration(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'retry-impulse-migration' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
