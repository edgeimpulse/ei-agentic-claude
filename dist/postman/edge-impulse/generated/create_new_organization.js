/**
 * Create a new organization. This is an internal API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/create
 */
export async function create_new_organization(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/create`, {
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
