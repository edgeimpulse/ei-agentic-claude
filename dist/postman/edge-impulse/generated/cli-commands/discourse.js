import { discourse } from '../discourse.js';
export function addDiscourseCommand(program) {
    program.command('discourse')
        .description('Auto-generated command for discourse')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await discourse(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'discourse' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
