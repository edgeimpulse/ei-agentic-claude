/**
 * Create a new organization. This is an internal API only available to white label admins
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/organizations
 */
export async function create_new_organization_within_white_label_context(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/whitelabel/organizations`, {
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
