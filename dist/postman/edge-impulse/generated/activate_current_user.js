/**
 * Activate the current user account (requires an activation code). This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/activate
 */
export async function activate_current_user(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/user/activate`, {
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
