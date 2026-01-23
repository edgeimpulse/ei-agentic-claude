import { accept_terms_of_service } from '../accept_terms_of_service';
export function addAccept_terms_of_serviceCommand(program) {
    program.command('accept-terms-of-service')
        .description('Auto-generated command for accept_terms_of_service')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await accept_terms_of_service(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    });
}
