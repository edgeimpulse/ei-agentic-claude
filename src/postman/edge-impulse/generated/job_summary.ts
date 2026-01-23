/**
 * Get a summary of jobs, grouped by key. Used to report to users how much compute they've used.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/summary?startDate=<dateTime>&endDate=<dateTime>
 */
export async function job_summary(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/summary?startDate=<dateTime>&endDate=<dateTime>`, {
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
