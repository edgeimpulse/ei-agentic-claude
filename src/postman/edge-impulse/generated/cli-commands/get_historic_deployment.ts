import { Command } from 'commander';
  import { get_historic_deployment } from '../get_historic_deployment';

export function addGet_historic_deploymentCommand(program: Command) {
  program.command('get-historic-deployment')
    .description('Auto-generated command for get_historic_deployment')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_historic_deployment(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-historic-deployment' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
