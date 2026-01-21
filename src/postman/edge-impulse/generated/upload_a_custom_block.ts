/**
 * Upload a zip file containing a custom transformation or deployment block.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/custom-block
 */
export async function upload_a_custom_block(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/custom-block`, {
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
