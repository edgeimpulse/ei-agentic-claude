/**
 * Update the properties of a transformation job.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId
 */
export async function update_transformation_job(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId`, {
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
