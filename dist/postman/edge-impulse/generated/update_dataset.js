/**
 * Set information about a dataset
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset
 */
export async function update_dataset(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/dataset/:dataset`, {
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
