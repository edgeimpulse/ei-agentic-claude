import { auto_label_an_image } from '../auto_label_an_image.js';
export function addAuto_label_an_imageCommand(program) {
    program.command('auto-label-an-image')
        .description('Auto-generated command for auto_label_an_image')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await auto_label_an_image(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'auto-label-an-image' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
