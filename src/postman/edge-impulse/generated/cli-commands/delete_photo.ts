import { Command } from 'commander';
  import { delete_photo } from '../delete_photo';

export function addDelete_photoCommand(program: Command) {
  program.command('delete-photo')
    .description('Auto-generated command for delete_photo')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_photo(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
