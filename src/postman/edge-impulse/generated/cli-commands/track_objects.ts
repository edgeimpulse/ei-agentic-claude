import { Command } from 'commander';
import { track_objects } from '../track_objects.ts';

export function addTrack_objectsCommand(program: Command) {
  program.command('track-objects')
    .description('Auto-generated command for track_objects')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await track_objects(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
