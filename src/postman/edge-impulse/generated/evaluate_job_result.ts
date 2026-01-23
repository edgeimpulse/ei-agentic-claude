/**
 * Get evaluate job result, containing detailed performance statistics for every possible variant of the impulse.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/deployment/evaluate
 */
export async function evaluate_job_result(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/deployment/evaluate`, {
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
