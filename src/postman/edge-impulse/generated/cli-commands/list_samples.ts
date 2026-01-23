import { Command } from 'commander';
  import { list_samples } from '../list_samples';

export function addList_samplesCommand(program: Command) {
  program.command('list-samples')
    .description('Auto-generated command for list_samples')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_samples(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
