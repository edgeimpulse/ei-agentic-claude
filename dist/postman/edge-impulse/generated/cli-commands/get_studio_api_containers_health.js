import { get_studio_api_containers_health } from '../get_studio_api_containers_health.js';
export function addGet_studio_api_containers_healthCommand(program) {
    program.command('get-studio-api-containers-health')
        .description('Auto-generated command for get_studio_api_containers_health')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_studio_api_containers_health(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-studio-api-containers-health' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
