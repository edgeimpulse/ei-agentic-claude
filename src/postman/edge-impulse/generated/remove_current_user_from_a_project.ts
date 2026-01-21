/**
 * DEPRECATED. Admin-only API to remove the current user from a project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId/remove
 */
export async function remove_current_user_from_a_project(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/admin/projects/:projectId/remove`, {
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
