import { Command } from 'commander';
  import { set_config } from '../set_config';

export function addSet_configCommand(program: Command) {
  program.command('set-config')
    .description('Auto-generated command for set_config')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await set_config(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'set-config' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
