import { Command } from 'commander';
  import { test_pretrained_model_images } from '../test_pretrained_model_images';

export function addTest_pretrained_model_imagesCommand(program: Command) {
  program.command('test-pretrained-model-images')
    .description('Auto-generated command for test_pretrained_model_images')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await test_pretrained_model_images(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'test-pretrained-model-images' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
