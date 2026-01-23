/**
 * Lists all possible DSP and ML blocks available for this white label.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/impulse/blocks
 */
export async function get_impulse_blocks(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/impulse/blocks`, {
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
