/**
 * Create a new third party authentication partner
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/third-party-auth
 */
export async function create_third_party_auth(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/third-party-auth`, {
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
