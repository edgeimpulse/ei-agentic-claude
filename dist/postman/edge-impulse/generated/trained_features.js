/**
 * Get a sample of trained features, this extracts a number of samples and their features.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId/features/get-graph?featureAx1=<integer>&featureAx2=<integer>
 */
export async function trained_features(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/training/anomaly/:learnId/features/get-graph?featureAx1=<integer>&featureAx2=<integer>`, {
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
