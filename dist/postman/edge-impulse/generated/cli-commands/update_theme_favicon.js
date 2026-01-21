import { update_theme_favicon } from '../update_theme_favicon.ts';
export function addUpdate_theme_faviconCommand(program) {
    program.command('update-theme-favicon')
        .description('Auto-generated command for update_theme_favicon')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_theme_favicon(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
