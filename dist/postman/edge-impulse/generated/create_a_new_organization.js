/**
 * Admin-only API to create a new organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/organizations
 */
export async function create_a_new_organization(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/admin/organizations`, {
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
