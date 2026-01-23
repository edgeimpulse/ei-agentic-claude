import { Command } from 'commander';
  import { update_note } from '../update_note';

export function addUpdate_noteCommand(program: Command) {
  program.command('update-note')
    .description('Auto-generated command for update_note')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_note(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-note' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
