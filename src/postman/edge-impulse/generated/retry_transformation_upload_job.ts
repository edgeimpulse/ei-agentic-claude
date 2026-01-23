/**
 * Retry the upload job from a transformation job. Only jobs that have failed can be retried.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/upload/retry
 */
export async function retry_transformation_upload_job(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/upload/retry`, {
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
