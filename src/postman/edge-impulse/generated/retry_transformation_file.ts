/**
 * Retry a transformation action on a file from a transformation job. Only files that have failed can be retried.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/files/:createProjectFileId/retry
 */
export async function retry_transformation_file(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/files/:createProjectFileId/retry`, {
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
