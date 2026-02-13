import { Command } from 'commander';
  import { request_activation_code_current_user } from '../request_activation_code_current_user';

export function addRequest_activation_code_current_userCommand(program: Command) {
  program.command('request-activation-code-current-user')
    .description('Auto-generated command for request_activation_code_current_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await request_activation_code_current_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'request-activation-code-current-user' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
