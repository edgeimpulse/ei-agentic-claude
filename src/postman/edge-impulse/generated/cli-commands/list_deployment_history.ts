import { Command } from 'commander';
  import { list_deployment_history } from '../list_deployment_history';

export function addList_deployment_historyCommand(program: Command) {
  program.command('list-deployment-history')
    .description('Auto-generated command for list_deployment_history')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await list_deployment_history(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'list-deployment-history' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
