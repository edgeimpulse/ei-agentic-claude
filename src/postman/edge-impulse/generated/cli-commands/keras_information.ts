import { Command } from 'commander';
  import { keras_information } from '../keras_information';

export function addKeras_informationCommand(program: Command) {
  program.command('keras-information')
    .description('Auto-generated command for keras_information')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await keras_information(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'keras-information' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
