/**
 * Add a new collaborator to a project owned by an organisation.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/add-project-collaborator
 */
export async function add_a_collaborator_to_a_project_within_an_organisation(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/add-project-collaborator`, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // body: JSON.stringify(params), // Uncomment for POST/PUT
  });
  return res.json();
}
