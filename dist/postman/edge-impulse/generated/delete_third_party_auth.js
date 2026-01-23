/**
 * Delete a third party authentication partner
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/third-party-auth/:authId
 */
export async function delete_third_party_auth(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/third-party-auth/:authId`, {
        method: 'DELETE',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(params), // Uncomment for POST/PUT
    });
    return res.json();
}
