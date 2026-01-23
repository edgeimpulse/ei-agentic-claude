/**
 * If a sample failed processing, retry the processing operation.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/retry-processing
 */
export async function retry_processing(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/retry-processing`, {
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
