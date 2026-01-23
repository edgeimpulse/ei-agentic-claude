/**
 * Verify whether the reset password code for the user is valid.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api-user-verify-reset-password-code
 */
export async function verify_reset_password_code(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api-user-verify-reset-password-code`, {
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
