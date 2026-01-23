/**
 * Admin-only API to get the list of all registered users.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/users?user=<string>&active=<integer>&tier=<string>&fields=<string>&sort=<string>&limit=<integer>&offset=<integer>
 */
export async function get_all_users(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/admin/users?user=<string>&active=<integer>&tier=<string>&fields=<string>&sort=<string>&limit=<integer>&offset=<integer>`, {
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
