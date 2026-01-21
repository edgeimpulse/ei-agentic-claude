/**
 * List all deployment targets
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/deployment/targets
 */
export async function deployment_targets(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/deployment/targets`, {
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
