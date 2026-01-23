import { edit_label } from '../edit_label.js';
export function addEdit_labelCommand(program) {
    program.command('edit-label')
        .description('Auto-generated command for edit_label')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await edit_label(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'edit-label' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
