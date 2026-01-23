/**
 * Start a transformation job to fetch data from the organization and put it in a project, or transform into new data.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project
 */
export async function start_transformation_job(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project`, {
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
