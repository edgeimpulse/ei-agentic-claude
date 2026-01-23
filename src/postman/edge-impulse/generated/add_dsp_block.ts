/**
 * Adds a dsp block.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp
 */
export async function add_dsp_block(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/dsp`, {
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
