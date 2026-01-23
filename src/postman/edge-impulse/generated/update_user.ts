/**
 * Admin-only API to update user properties.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/users/:userId
 */
export async function update_user(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/admin/users/:userId`, {
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
