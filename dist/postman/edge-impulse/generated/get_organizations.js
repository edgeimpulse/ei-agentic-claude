/**
 * List all organizations for a user. This function is only available through a JWT token.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/users/:userId/organizations
 */
export async function get_organizations(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/users/:userId/organizations`, {
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
