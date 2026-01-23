import { track_objects } from '../track_objects.js';
export function addTrack_objectsCommand(program) {
    program.command('track-objects')
        .description('Auto-generated command for track_objects')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await track_objects(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'track-objects' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
