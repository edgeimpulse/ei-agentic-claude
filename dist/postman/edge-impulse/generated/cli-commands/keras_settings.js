import { keras_settings } from '../keras_settings.js';
export function addKeras_settingsCommand(program) {
    program.command('keras-settings')
        .description('Auto-generated command for keras_settings')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await keras_settings(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'keras-settings' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
