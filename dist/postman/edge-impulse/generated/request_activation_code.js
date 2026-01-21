/**
 * Request a new activation code. This function is only available through a JWT token.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/users/:userId/request-activation
 */
export async function request_activation_code(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/users/:userId/request-activation`, {
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
