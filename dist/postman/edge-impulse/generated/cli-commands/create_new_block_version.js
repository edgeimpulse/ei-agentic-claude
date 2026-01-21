import { create_new_block_version } from '../create_new_block_version.ts';
export function addCreate_new_block_versionCommand(program) {
    program.command('create-new-block-version')
        .description('Auto-generated command for create_new_block_version')
        .requiredOption('--apiKey <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await create_new_block_version(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
