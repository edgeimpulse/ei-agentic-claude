import { Command } from 'commander';
  import { create_a_new_white_label } from '../create_a_new_white_label';

export function addCreate_a_new_white_labelCommand(program: Command) {
  program.command('create-a-new-white-label')
    .description('Auto-generated command for create_a_new_white_label')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_a_new_white_label(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-a-new-white-label' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
