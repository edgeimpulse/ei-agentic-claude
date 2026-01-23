import { last_modification } from '../last_modification.js';
export function addLast_modificationCommand(program) {
    program.command('last-modification')
        .description('Auto-generated command for last_modification')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await last_modification(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'last-modification' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
