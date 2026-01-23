/**
 * Get the current status of a transformation job job.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId?transformLimit=<integer>&transformOffset=<integer>&selection=<string>
 */
export async function get_transformation_job_status(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId?transformLimit=<integer>&transformOffset=<integer>&selection=<string>`, {
    method: 'GET',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // body: JSON.stringify(params), // Uncomment for POST/PUT
  });
  return res.json();
}
