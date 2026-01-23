import { Command } from 'commander';
  import { evaluate } from '../evaluate';

export function addEvaluateCommand(program: Command) {
  program.command('evaluate')
    .description('Auto-generated command for evaluate')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await evaluate(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'evaluate' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
