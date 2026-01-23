/**
 * White label admin only API to get project information.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/projects/:projectId
 */
export async function get_a_white_label_project(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/projects/:projectId`, {
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
