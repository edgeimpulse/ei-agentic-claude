/**
 * Take the raw training set and generate features from them. Updates are streamed over the websocket API.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/generate-features
 */
export async function generate_features(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/generate-features`, {
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
