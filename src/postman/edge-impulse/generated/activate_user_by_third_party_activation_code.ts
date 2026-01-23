/**
 * Activate a user that was created by a third party. This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/activate-by-third-party-activation-code
 */
export async function activate_user_by_third_party_activation_code(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/user/activate-by-third-party-activation-code`, {
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
