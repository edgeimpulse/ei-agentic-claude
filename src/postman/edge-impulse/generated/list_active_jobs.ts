/**
 * Get all active jobs for this organization
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs?rootOnly=<boolean>
 */
export async function list_active_jobs(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/jobs?rootOnly=<boolean>`, {
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
