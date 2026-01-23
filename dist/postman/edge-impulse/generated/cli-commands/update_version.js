import { update_version } from '../update_version.js';
export function addUpdate_versionCommand(program) {
    program.command('update-version')
        .description('Auto-generated command for update_version')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_version(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'update-version' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
