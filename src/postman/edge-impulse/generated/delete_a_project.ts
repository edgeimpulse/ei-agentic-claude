/**
 * Admin-only API to delete a project.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId
 */
export async function delete_a_project(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/admin/projects/:projectId`, {
    method: 'DELETE',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // body: JSON.stringify(params), // Uncomment for POST/PUT
  });
  return res.json();
}
