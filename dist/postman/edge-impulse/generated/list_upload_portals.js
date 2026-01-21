/**
 * Retrieve all configured upload portals.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals
 */
export async function list_upload_portals(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/portals`, {
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
