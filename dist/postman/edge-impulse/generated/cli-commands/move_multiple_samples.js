import { move_multiple_samples } from '../move_multiple_samples.js';
export function addMove_multiple_samplesCommand(program) {
    program.command('move-multiple-samples')
        .description('Auto-generated command for move_multiple_samples')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await move_multiple_samples(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'move-multiple-samples' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
