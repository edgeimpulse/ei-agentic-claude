import { Command } from 'commander';
import { get_notes } from '../get_notes.ts';

export function addGet_notesCommand(program: Command) {
  program.command('get-notes')
    .description('Auto-generated command for get_notes')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_notes(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
