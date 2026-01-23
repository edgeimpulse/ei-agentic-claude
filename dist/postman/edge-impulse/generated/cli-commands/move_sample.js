import { move_sample } from '../move_sample.js';
export function addMove_sampleCommand(program) {
    program.command('move-sample')
        .description('Auto-generated command for move_sample')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await move_sample(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'move-sample' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
