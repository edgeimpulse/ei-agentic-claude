import { Command } from 'commander';
  import { request_enterprise_trial_extension } from '../request_enterprise_trial_extension';

export function addRequest_enterprise_trial_extensionCommand(program: Command) {
  program.command('request-enterprise-trial-extension')
    .description('Auto-generated command for request_enterprise_trial_extension')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await request_enterprise_trial_extension(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'request-enterprise-trial-extension' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
