/**
 * Retrieve all archived organizational pipelines
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/archived
 */
export async function list_archived_pipelines(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/archived`, {
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
