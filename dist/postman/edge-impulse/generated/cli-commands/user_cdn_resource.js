import { user_cdn_resource } from '../user_cdn_resource.js';
export function addUser_cdn_resourceCommand(program) {
    program.command('user-cdn-resource')
        .description('Auto-generated command for user_cdn_resource')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await user_cdn_resource(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
