/**
 * Create a new white label
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/whitelabels
 */
export async function create_a_new_white_label(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/whitelabels`, {
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
