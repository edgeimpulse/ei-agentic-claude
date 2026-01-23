/**
 * Admin-only API to get information about a user.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/users/:userId
 */
export async function get_user(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/admin/users/:userId`, {
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
