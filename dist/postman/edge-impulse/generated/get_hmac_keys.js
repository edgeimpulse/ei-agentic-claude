/**
 * Retrieve all HMAC keys.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/hmackeys
 */
export async function get_hmac_keys(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/hmackeys`, {
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
