/**
 * Update user properties such as name. This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user
 */
export async function update_current_user(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/user`, {
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
