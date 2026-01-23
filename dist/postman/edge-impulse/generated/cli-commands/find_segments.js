import { find_segments } from '../find_segments.js';
export function addFind_segmentsCommand(program) {
    program.command('find-segments')
        .description('Auto-generated command for find_segments')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await find_segments(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'find-segments' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
