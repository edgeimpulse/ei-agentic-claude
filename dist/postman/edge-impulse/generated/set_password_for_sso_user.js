/**
 * Set the password for a new SSO user. This function is only available through an SSO access token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/users/:userId/set-password
 */
export async function set_password_for_sso_user(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/users/:userId/set-password`, {
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
