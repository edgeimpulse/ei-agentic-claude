import { Command } from 'commander';
  import { keras_metadata } from '../keras_metadata';

export function addKeras_metadataCommand(program: Command) {
  program.command('keras-metadata')
    .description('Auto-generated command for keras_metadata')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await keras_metadata(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
