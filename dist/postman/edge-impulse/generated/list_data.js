/**
 * Lists all data items. This can be filtered by the ?filter parameter.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data?dataset=<string>&filter=<string>&limit=<integer>&offset=<integer>
 */
export async function list_data(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/data?dataset=<string>&filter=<string>&limit=<integer>&offset=<integer>`, {
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
