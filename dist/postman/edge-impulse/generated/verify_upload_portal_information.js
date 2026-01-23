/**
 * Retrieve a subset of files from the portal, to be used in the data source wizard.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/verify
 */
export async function verify_upload_portal_information(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/portals/:portalId/verify`, {
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
