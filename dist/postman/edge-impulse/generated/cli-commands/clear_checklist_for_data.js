import { clear_checklist_for_data } from '../clear_checklist_for_data';
export function addClear_checklist_for_dataCommand(program) {
    program.command('clear-checklist-for-data')
        .description('Auto-generated command for clear_checklist_for_data')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await clear_checklist_for_data(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
