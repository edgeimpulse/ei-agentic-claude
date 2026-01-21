/**
 * Retrieve all projects for the organization.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/projects
 */
export async function get_projects(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/projects`, {
    method: 'GET',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // body: JSON.stringify(params), // Uncomment for POST/PUT
  });
  return res.json();
}
