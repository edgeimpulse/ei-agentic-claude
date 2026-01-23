/**
 * Get information about a third party authentication partner
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/third-party-auth/:authId
 */
export async function get_third_party_auth(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/third-party-auth/:authId`, {
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
