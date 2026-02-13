import { Command } from 'commander';
  import { set_sample_structured_labels } from '../set_sample_structured_labels';

export function addSet_sample_structured_labelsCommand(program: Command) {
  program.command('set-sample-structured-labels')
    .description('Auto-generated command for set_sample_structured_labels')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await set_sample_structured_labels(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'set-sample-structured-labels' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
