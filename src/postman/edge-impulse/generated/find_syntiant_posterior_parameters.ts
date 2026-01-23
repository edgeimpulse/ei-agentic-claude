/**
 * Automatically find the current posterior parameters for the Syntiant deployment target
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/find-syntiant-posterior
 */
export async function find_syntiant_posterior_parameters(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/find-syntiant-posterior`, {
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
