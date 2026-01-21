/**
 * Test endpoint that can only be reached with admin rights.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/test-admin
 */
export async function admin_endpoint(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/test-admin`, {
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
