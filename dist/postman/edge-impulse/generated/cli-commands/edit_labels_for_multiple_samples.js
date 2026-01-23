import { edit_labels_for_multiple_samples } from '../edit_labels_for_multiple_samples.js';
export function addEdit_labels_for_multiple_samplesCommand(program) {
    program.command('edit-labels-for-multiple-samples')
        .description('Auto-generated command for edit_labels_for_multiple_samples')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await edit_labels_for_multiple_samples(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
