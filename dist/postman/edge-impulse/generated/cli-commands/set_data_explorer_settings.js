import { set_data_explorer_settings } from '../set_data_explorer_settings.js';
export function addSet_data_explorer_settingsCommand(program) {
    program.command('set-data-explorer-settings')
        .description('Auto-generated command for set_data_explorer_settings')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await set_data_explorer_settings(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'set-data-explorer-settings' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
