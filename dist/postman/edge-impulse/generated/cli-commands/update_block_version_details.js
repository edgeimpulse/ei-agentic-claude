import { update_block_version_details } from '../update_block_version_details.js';
export function addUpdate_block_version_detailsCommand(program) {
    program.command('update-block-version-details')
        .description('Auto-generated command for update_block_version_details')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await update_block_version_details(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
