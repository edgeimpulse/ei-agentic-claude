import { rename_sample } from '../rename_sample.js';
export function addRename_sampleCommand(program) {
    program.command('rename-sample')
        .description('Auto-generated command for rename_sample')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await rename_sample(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'rename-sample' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
