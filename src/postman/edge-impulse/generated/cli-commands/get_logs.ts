import { Command } from 'commander';
  import { get_logs } from '../get_logs';

export function addGet_logsCommand(program: Command) {
  program.command('get-logs')
    .description('Auto-generated command for get_logs')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_logs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-logs' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
