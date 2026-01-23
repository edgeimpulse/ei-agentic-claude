import { add_a_collaborator_to_a_project_within_an_organisation } from '../add_a_collaborator_to_a_project_within_an_organisation.js';
export function addAdd_a_collaborator_to_a_project_within_an_organisationCommand(program) {
    program.command('add-a-collaborator-to-a-project-within-an-organisation')
        .description('Auto-generated command for add_a_collaborator_to_a_project_within_an_organisation')
        .requiredOption('--api-key <apiKey>', 'Edge Impulse API key')
        .option('--params <params>', 'JSON string of parameters')
        .action(async (opts) => {
        try {
            const params = opts.params ? JSON.parse(opts.params) : {};
            const res = await add_a_collaborator_to_a_project_within_an_organisation(params, opts.apiKey);
            console.log(JSON.stringify(res, null, 2));
        }
        catch (e) {
            console.warn(`Warning: Command 'add-a-collaborator-to-a-project-within-an-organisation' may need extension - ${e instanceof Error ? e.message : e}`);
            process.exit(0);
        }
    });
}
