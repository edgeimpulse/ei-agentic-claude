import { transfer_ownership_user } from '../transfer_ownership_user.js';
export function addTransfer_ownership_userCommand(program) {
    program.command('transfer-ownership-user')
        .description('Auto-generated command for transfer_ownership_user')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await transfer_ownership_user(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'transfer-ownership-user' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
