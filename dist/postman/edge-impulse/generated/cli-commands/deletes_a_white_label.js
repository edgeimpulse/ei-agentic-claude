import { deletes_a_white_label } from '../deletes_a_white_label.js';
export function addDeletes_a_white_labelCommand(program) {
    program.command('deletes-a-white-label')
        .description('Auto-generated command for deletes_a_white_label')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await deletes_a_white_label(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'deletes-a-white-label' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
