/**
 * Add a collaborator to a project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/collaborators/add
 */
export async function add_collaborator(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/collaborators/add`, {
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
