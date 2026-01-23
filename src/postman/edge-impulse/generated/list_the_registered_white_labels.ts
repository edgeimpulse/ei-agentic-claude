/**
 * Retrieve the list of registered white labels.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/whitelabels
 */
export async function list_the_registered_white_labels(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/whitelabels`, {
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
