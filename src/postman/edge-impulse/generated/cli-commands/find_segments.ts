import { Command } from 'commander';
import { find_segments } from '../find_segments.ts';

export function addFind_segmentsCommand(program: Command) {
  program.command('find-segments')
    .description('Auto-generated command for find_segments')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await find_segments(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
