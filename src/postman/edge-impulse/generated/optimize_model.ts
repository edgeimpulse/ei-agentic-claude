/**
 * Evaluates optimal model architecture
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/optimize
 */
export async function optimize_model(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/optimize`, {
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
