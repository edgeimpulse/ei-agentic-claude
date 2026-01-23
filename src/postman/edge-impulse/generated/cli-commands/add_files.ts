import { Command } from 'commander';
  import { add_files } from '../add_files';

export function addAdd_filesCommand(program: Command) {
  program.command('add-files')
    .description('Auto-generated command for add_files')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_files(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'add-files' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
