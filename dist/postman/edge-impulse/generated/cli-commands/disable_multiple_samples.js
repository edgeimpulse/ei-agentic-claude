import { disable_multiple_samples } from '../disable_multiple_samples';
export function addDisable_multiple_samplesCommand(program) {
    program.command('disable-multiple-samples')
        .description('Auto-generated command for disable_multiple_samples')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await disable_multiple_samples(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
