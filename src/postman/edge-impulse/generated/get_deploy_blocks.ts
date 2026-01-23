/**
 * Retrieve all deploy blocks.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy
 */
export async function get_deploy_blocks(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy`, {
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
