/**
 * Get classify job result, containing the result for the complete testing dataset.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/classify/all/result
 */
export async function classify_job_result(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/classify/all/result`, {
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
