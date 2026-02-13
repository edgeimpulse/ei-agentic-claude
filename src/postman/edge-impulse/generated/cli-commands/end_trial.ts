import { Command } from 'commander';
  import { end_trial } from '../end_trial';

export function addEnd_trialCommand(program: Command) {
  program.command('end-trial')
    .description('Auto-generated command for end_trial')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await end_trial(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'end-trial' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
