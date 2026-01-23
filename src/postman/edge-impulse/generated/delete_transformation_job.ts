/**
 * Remove a transformation job. This will stop all running jobs.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId
 */
export async function delete_transformation_job(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId`, {
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
