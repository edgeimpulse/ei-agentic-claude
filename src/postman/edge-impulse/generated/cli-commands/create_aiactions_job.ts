import { Command } from 'commander';
  import { create_aiactions_job } from '../create_aiactions_job';

export function addCreate_aiactions_jobCommand(program: Command) {
  program.command('create-aiactions-job')
    .description('Auto-generated command for create_aiactions_job')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_aiactions_job(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-aiactions-job' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
