/**
 * Get a white label domain given its unique identifier.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/domain
 */
export async function get_white_label_domain(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/domain`, {
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
