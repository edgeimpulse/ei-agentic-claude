import { Command } from 'commander';
import { get_parameter_sets } from '../get_parameter_sets.ts';

export function addGet_parameter_setsCommand(program: Command) {
  program.command('get-parameter-sets')
    .description('Auto-generated command for get_parameter_sets')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_parameter_sets(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
