import { bulk_update_metadata } from '../bulk_update_metadata.js';
export function addBulk_update_metadataCommand(program) {
    program.command('bulk-update-metadata')
        .description('Auto-generated command for bulk_update_metadata')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await bulk_update_metadata(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'bulk-update-metadata' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
