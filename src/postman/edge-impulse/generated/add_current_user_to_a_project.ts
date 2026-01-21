/**
 * DEPRECATED. Admin-only API to add the current user to a project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId/add
 */
export async function add_current_user_to_a_project(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/admin/projects/:projectId/add`, {
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
