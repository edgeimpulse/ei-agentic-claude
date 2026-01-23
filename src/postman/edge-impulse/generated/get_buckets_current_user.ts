/**
 * List all organizational storage buckets that the current user has access to. This function is only available through a JWT token.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/users/buckets
 */
export async function get_buckets_current_user(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/users/buckets`, {
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
