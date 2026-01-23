import { reset_password } from '../reset_password.js';
export function addReset_passwordCommand(program) {
    program.command('reset-password')
        .description('Auto-generated command for reset_password')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await reset_password(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'reset-password' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
