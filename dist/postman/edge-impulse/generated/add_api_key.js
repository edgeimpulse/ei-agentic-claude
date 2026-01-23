/**
 * Add an API key.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys
 */
export async function add_api_key(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/apikeys`, {
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
