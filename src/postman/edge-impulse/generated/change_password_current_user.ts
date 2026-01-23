/**
 * Change the password for the current user account. This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/change-password
 */
export async function change_password_current_user(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/user/change-password`, {
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
