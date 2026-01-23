import { readme_io } from '../readme_io.js';
export function addReadme_ioCommand(program) {
    program.command('readme-io')
        .description('Auto-generated command for readme_io')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await readme_io(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'readme-io' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
