import { Command } from 'commander';
import { add_keywords_and_noise } from '../add_keywords_and_noise.ts';

export function addAdd_keywords_and_noiseCommand(program: Command) {
  program.command('add-keywords-and-noise')
    .description('Auto-generated command for add_keywords_and_noise')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await add_keywords_and_noise(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
