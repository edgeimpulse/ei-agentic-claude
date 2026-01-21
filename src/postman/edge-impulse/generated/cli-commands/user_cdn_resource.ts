import { Command } from 'commander';
import { user_cdn_resource } from '../user_cdn_resource.ts';

export function addUser_cdn_resourceCommand(program: Command) {
  program.command('user-cdn-resource')
    .description('Auto-generated command for user_cdn_resource')
    .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
    .option('--params <params>', 'JSON string of parameters')
    .action(async (opts) => {
      try {
        const params = opts.params ? JSON.parse(opts.params) : {};
        const res = await user_cdn_resource(params, opts.apiKey);
        console.log(JSON.stringify(res, null, 2));
      } catch (e) {
        console.error(e);
        process.exit(1);
      }
    });
}
