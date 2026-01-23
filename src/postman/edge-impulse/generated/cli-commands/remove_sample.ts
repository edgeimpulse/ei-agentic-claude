import { Command } from 'commander';
  import { remove_sample } from '../remove_sample';

export function addRemove_sampleCommand(program: Command) {
  program.command('remove-sample')
    .description('Auto-generated command for remove_sample')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await remove_sample(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
