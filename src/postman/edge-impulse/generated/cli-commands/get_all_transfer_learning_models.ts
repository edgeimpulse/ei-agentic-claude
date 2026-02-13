import { Command } from 'commander';
  import { get_all_transfer_learning_models } from '../get_all_transfer_learning_models';

export function addGet_all_transfer_learning_modelsCommand(program: Command) {
  program.command('get-all-transfer-learning-models')
    .description('Auto-generated command for get_all_transfer_learning_models')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await get_all_transfer_learning_models(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'get-all-transfer-learning-models' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
