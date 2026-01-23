import { get_device } from '../get_device.js';
export function addGet_deviceCommand(program) {
    program.command('get-device')
        .description('Auto-generated command for get_device')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_device(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-device' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
