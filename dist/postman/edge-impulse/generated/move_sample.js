/**
 * Move a sample to another category (e.g. from test to training).
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/move
 */
export async function move_sample(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/move`, {
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
