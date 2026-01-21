/**
 * Get the current posterior parameters for the Syntiant deployment target
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/deployment/syntiant/posterior
 */
export async function get_syntiant_posterior_parameters(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/deployment/syntiant/posterior`, {
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
