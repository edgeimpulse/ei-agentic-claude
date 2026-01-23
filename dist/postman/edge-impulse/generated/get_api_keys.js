/**
 * Retrieve all API keys. This does **not** return the full API key, but only a portion (for security purposes).
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys
 */
export async function get_api_keys(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys`, {
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
