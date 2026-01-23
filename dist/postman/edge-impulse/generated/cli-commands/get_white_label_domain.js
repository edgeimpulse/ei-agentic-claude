import { get_white_label_domain } from '../get_white_label_domain.js';
export function addGet_white_label_domainCommand(program) {
    program.command('get-white-label-domain')
        .description('Auto-generated command for get_white_label_domain')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await get_white_label_domain(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'get-white-label-domain' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
