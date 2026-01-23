/**
 * Proxy function to retrieve data from the user CDN. This function is only used during development.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api-usercdn?path=<string>
 */
export async function user_cdn_resource(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api-usercdn?path=<string>`, {
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
