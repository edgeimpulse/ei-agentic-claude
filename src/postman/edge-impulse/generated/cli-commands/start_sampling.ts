import { Command } from 'commander';
  import { start_sampling } from '../start_sampling';

export function addStart_samplingCommand(program: Command) {
  program.command('start-sampling')
    .description('Auto-generated command for start_sampling')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await start_sampling(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
