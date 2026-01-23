/**
 * Get metadata about a trained Keras block. Use the impulse blocks to find the learnId.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/metadata
 */
export async function keras_metadata(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/training/keras/:learnId/metadata`, {
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
