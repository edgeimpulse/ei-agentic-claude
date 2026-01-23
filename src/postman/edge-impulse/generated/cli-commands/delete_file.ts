import { Command } from 'commander';
  import { delete_file } from '../delete_file';

export function addDelete_fileCommand(program: Command) {
  program.command('delete-file')
    .description('Auto-generated command for delete_file')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await delete_file(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'delete-file' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
