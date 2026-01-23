/**
 * Change the dataset for selected data items.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/change-dataset?dataset=<string>&dataIds=<string>&filter=<string>
 */
export async function change_dataset(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/data/change-dataset?dataset=<string>&dataIds=<string>&filter=<string>`, {
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
