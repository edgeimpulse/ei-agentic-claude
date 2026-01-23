import { Command } from 'commander';
  import { rename_sample } from '../rename_sample';

export function addRename_sampleCommand(program: Command) {
  program.command('rename-sample')
    .description('Auto-generated command for rename_sample')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await rename_sample(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
