import { Command } from 'commander';
  import { get_learn_xdata } from '../get_learn_xdata';

export function addGet_learn_xdataCommand(program: Command) {
  program.command('get-learn-xdata')
    .description('Auto-generated command for get_learn_xdata')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_learn_xdata(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-learn-xdata' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
