import { upload_a_data_explorer_screenshot } from '../upload_a_data_explorer_screenshot.js';
export function addUpload_a_data_explorer_screenshotCommand(program) {
    program.command('upload-a-data-explorer-screenshot')
        .description('Auto-generated command for upload_a_data_explorer_screenshot')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await upload_a_data_explorer_screenshot(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
