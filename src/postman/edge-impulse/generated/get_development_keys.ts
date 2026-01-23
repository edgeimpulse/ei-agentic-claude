/**
 * Retrieve the development API and HMAC keys for a project. These keys are specifically marked to be used during development. These keys can be `undefined` if no development keys are set.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/devkeys
 */
export async function get_development_keys(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/devkeys`, {
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
