/**
 * Authorize a third party to access a project
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/third-party-auth/:authId/authorize
 */
export async function give_access_to_project(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/third-party-auth/:authId/authorize`, {
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
