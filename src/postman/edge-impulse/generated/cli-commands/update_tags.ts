import { Command } from 'commander';
  import { update_tags } from '../update_tags';

export function addUpdate_tagsCommand(program: Command) {
  program.command('update-tags')
    .description('Auto-generated command for update_tags')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await update_tags(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'update-tags' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
