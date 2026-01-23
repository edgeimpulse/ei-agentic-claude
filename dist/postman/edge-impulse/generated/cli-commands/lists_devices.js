import { lists_devices } from '../lists_devices.js';
export function addLists_devicesCommand(program) {
    program.command('lists-devices')
        .description('Auto-generated command for lists_devices')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await lists_devices(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'lists-devices' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
