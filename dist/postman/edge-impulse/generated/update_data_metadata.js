/**
 * Update the data item metadata.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId
 */
export async function update_data_metadata(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId`, {
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
