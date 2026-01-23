/**
 * Log in a user to the forum. This function is only available through a JWT token.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/auth/discourse?sso=<string>&sig=<string>
 */
export async function discourse(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/auth/discourse?sso=<string>&sig=<string>`, {
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
