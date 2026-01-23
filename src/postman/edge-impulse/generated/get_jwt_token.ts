/**
 * Get a JWT token to authenticate with the API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api-login
 */
export async function get_jwt_token(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api-login`, {
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
