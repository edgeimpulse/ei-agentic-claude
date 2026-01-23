import { Command } from 'commander';
  import { launch_getting_started_wizard } from '../launch_getting_started_wizard';

export function addLaunch_getting_started_wizardCommand(program: Command) {
  program.command('launch-getting-started-wizard')
    .description('Auto-generated command for launch_getting_started_wizard')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await launch_getting_started_wizard(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
