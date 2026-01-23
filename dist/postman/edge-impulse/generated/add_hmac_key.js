/**
 * Add an HMAC key. If you set `developmentKey` to `true` this flag will be removed from the current development HMAC key.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/hmackeys
 */
export async function add_hmac_key(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/hmackeys`, {
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
