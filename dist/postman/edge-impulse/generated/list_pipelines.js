/**
 * Retrieve all organizational pipelines
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines
 */
export async function list_pipelines(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines`, {
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
