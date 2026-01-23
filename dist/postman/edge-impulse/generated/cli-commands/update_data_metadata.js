import { update_data_metadata } from '../update_data_metadata.js';
export function addUpdate_data_metadataCommand(program) {
    program.command('update-data-metadata')
        .description('Auto-generated command for update_data_metadata')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_data_metadata(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
