import { Command } from 'commander';
  import { list_tuner_runs } from '../list_tuner_runs';

export function addList_tuner_runsCommand(program: Command) {
  program.command('list-tuner-runs')
    .description('Auto-generated command for list_tuner_runs')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_tuner_runs(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-tuner-runs' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
