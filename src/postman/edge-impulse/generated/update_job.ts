/**
 * Update a job.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/:jobId/update
 */
export async function update_job(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/:jobId/update`, {
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
