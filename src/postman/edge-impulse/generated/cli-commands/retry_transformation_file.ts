import { Command } from 'commander';
import { retry_transformation_file } from '../retry_transformation_file.ts';

export function addRetry_transformation_fileCommand(program: Command) {
  program.command('retry-transformation-file')
    .description('Auto-generated command for retry_transformation_file')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await retry_transformation_file(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
