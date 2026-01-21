/**
 * Get a token to authenticate with the web socket interface.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/socket-token
 */
export async function get_socket_token(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/socket-token`, {
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
