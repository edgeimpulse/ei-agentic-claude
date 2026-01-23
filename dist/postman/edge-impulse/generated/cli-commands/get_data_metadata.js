import { get_data_metadata } from '../get_data_metadata';
export function addGet_data_metadataCommand(program) {
    program.command('get-data-metadata')
        .description('Auto-generated command for get_data_metadata')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_data_metadata(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
