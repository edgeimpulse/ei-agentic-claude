import { Command } from 'commander';
  import { classify_sample_by_learn_block } from '../classify_sample_by_learn_block';

export function addClassify_sample_by_learn_blockCommand(program: Command) {
  program.command('classify-sample-by-learn-block')
    .description('Auto-generated command for classify_sample_by_learn_block')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await classify_sample_by_learn_block(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'classify-sample-by-learn-block' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
