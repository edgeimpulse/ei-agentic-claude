/**
 * Admin-only API to add a user to a project. If no user is provided, the current user is used.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId/members
 */
export async function add_user_to_a_project(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/admin/projects/:projectId/members`, {
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
