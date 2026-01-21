/**
 * Get information about a portal
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId
 */
export async function portal_info(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/portals/:portalId`, {
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
