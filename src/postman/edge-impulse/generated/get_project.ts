/**
 * Admin-only API to get project information.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId
 */
export async function get_project(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/admin/projects/:projectId`, {
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
