/**
 * Get all public versions for this project. You don't need any authentication for this function.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/versions/public
 */
export async function list_public_versions(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/versions/public`, {
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
