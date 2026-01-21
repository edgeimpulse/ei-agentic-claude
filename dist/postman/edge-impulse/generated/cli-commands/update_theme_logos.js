import { update_theme_logos } from '../update_theme_logos.ts';
export function addUpdate_theme_logosCommand(program) {
    program.command('update-theme-logos')
        .description('Auto-generated command for update_theme_logos')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_theme_logos(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
