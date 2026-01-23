/**
 * Deletes the sample. Note that this does not delete the data from cold storage.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId
 */
export async function remove_sample(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId`, {
        method: 'DELETE',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(params), // Uncomment for POST/PUT
    });
    return res.json();
}
