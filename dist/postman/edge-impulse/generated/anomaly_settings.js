/**
 * Configure the anomaly block, such as its minimum confidence score. Use the impulse blocks to find the learnId.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId
 */
export async function anomaly_settings(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId`, {
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
