import { list_files } from '../list_files.js';
export function addList_filesCommand(program) {
    program.command('list-files')
        .description('Auto-generated command for list_files')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await list_files(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'list-files' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
