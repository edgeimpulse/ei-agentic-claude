import { remove_hmac_key } from '../remove_hmac_key.js';
export function addRemove_hmac_keyCommand(program) {
    program.command('remove-hmac-key')
        .description('Auto-generated command for remove_hmac_key')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await remove_hmac_key(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'remove-hmac-key' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
