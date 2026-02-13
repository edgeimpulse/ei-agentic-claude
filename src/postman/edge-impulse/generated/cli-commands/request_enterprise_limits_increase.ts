import { Command } from 'commander';
  import { request_enterprise_limits_increase } from '../request_enterprise_limits_increase';

export function addRequest_enterprise_limits_increaseCommand(program: Command) {
  program.command('request-enterprise-limits-increase')
    .description('Auto-generated command for request_enterprise_limits_increase')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await request_enterprise_limits_increase(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'request-enterprise-limits-increase' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
