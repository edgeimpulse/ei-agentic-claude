/**
 * Get information about an anomaly block, such as its dependencies. Use the impulse blocks to find the learnId.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId
 */
export async function anomaly_information(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId`, {
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
