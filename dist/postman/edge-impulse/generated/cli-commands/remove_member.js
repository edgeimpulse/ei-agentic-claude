import { remove_member } from '../remove_member.js';
export function addRemove_memberCommand(program) {
    program.command('remove-member')
        .description('Auto-generated command for remove_member')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await remove_member(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'remove-member' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
