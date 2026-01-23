import { set_sample_metadata } from '../set_sample_metadata.js';
export function addSet_sample_metadataCommand(program) {
    program.command('set-sample-metadata')
        .description('Auto-generated command for set_sample_metadata')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await set_sample_metadata(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'set-sample-metadata' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
