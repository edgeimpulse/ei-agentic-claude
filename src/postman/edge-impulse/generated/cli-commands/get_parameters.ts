import { Command } from 'commander';
  import { get_parameters } from '../get_parameters';

export function addGet_parametersCommand(program: Command) {
  program.command('get-parameters')
    .description('Auto-generated command for get_parameters')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_parameters(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
