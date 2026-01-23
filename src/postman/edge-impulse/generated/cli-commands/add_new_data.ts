import { Command } from 'commander';
  import { add_new_data } from '../add_new_data';

export function addAdd_new_dataCommand(program: Command) {
  program.command('add-new-data')
    .description('Auto-generated command for add_new_data')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_new_data(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
