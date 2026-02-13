import { Command } from 'commander';
  import { start_enterprise_trial } from '../start_enterprise_trial';

export function addStart_enterprise_trialCommand(program: Command) {
  program.command('start-enterprise-trial')
    .description('Auto-generated command for start_enterprise_trial')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await start_enterprise_trial(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'start-enterprise-trial' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
