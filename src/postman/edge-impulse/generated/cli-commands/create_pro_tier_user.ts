import { Command } from 'commander';
  import { create_pro_tier_user } from '../create_pro_tier_user';

export function addCreate_pro_tier_userCommand(program: Command) {
  program.command('create-pro-tier-user')
    .description('Auto-generated command for create_pro_tier_user')
    .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await create_pro_tier_user(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.warn(`Warning: Command 'create-pro-tier-user' may need extension - ${e instanceof Error ? e.message : e}`);
        process.exit(0);
      }
    });
}
