import { Command } from 'commander';
  import { request_reset_password } from '../request_reset_password';

export function addRequest_reset_passwordCommand(program: Command) {
  program.command('request-reset-password')
    .description('Auto-generated command for request_reset_password')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await request_reset_password(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'request-reset-password' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
