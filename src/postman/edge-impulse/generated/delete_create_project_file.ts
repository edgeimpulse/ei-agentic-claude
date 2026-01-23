/**
 * Remove a file from a create project job. Only files for which no jobs are running can be deleted.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/files/:createProjectFileId
 */
export async function delete_create_project_file(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/files/:createProjectFileId`, {
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
