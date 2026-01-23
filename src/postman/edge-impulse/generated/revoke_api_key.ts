/**
 * Revoke an API key.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys/:apiKeyId
 */
export async function revoke_api_key(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys/:apiKeyId`, {
    method: 'DELETE',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // body: JSON.stringify(params), // Uncomment for POST/PUT
  });
  return res.json();
}
