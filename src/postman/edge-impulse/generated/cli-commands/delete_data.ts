import { Command } from 'commander';
import { delete_data } from '../delete_data.ts';

export function addDelete_dataCommand(program: Command) {
  program.command('delete-data')
    .description('Auto-generated command for delete_data')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_data(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
