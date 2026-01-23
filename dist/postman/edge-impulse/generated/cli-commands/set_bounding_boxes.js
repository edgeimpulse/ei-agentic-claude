import { set_bounding_boxes } from '../set_bounding_boxes.js';
export function addSet_bounding_boxesCommand(program) {
    program.command('set-bounding-boxes')
        .description('Auto-generated command for set_bounding_boxes')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await set_bounding_boxes(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
