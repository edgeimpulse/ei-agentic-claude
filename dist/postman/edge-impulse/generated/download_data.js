/**
 * Download all data for selected data items. This function does not query the underlying bucket.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/download?dataset=<string>&dataIds=<string>&filter=<string>
 */
export async function download_data(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/data/download?dataset=<string>&dataIds=<string>&filter=<string>`, {
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
