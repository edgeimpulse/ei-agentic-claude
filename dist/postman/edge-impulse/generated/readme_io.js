/**
 * Log in a user to the docs. This function is only available through a JWT token.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/auth/readme
 */
export async function readme_io(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/auth/readme`, {
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
