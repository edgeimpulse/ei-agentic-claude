/**
 * Adds a deploy block.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy
 */
export async function add_deploy_block(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy`, {
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
