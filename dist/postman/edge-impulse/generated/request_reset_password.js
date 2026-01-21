/**
 * Request a password reset link for a user.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api-user-request-reset-password
 */
export async function request_reset_password(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api-user-request-reset-password`, {
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
