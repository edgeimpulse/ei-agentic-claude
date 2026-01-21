import { Command } from 'commander';
import { remove_note } from '../remove_note.ts';

export function addRemove_noteCommand(program: Command) {
  program.command('remove-note')
    .description('Auto-generated command for remove_note')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await remove_note(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
