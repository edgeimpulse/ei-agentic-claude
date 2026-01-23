import { update_config } from '../update_config.js';
export function addUpdate_configCommand(program) {
    program.command('update-config')
        .description('Auto-generated command for update_config')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_config(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'update-config' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
