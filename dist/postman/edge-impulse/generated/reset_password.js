/**
 * Reset the password for a user.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api-user-reset-password
 */
export async function reset_password(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api-user-reset-password`, {
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
