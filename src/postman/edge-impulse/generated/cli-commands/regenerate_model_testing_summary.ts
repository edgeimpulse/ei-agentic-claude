import { Command } from 'commander';
  import { regenerate_model_testing_summary } from '../regenerate_model_testing_summary';

export function addRegenerate_model_testing_summaryCommand(program: Command) {
  program.command('regenerate-model-testing-summary')
    .description('Auto-generated command for regenerate_model_testing_summary')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await regenerate_model_testing_summary(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'regenerate-model-testing-summary' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
