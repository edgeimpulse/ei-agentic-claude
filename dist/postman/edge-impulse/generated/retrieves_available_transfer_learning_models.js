/**
 * Retrieves available transfer learning models
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/transfer-learning-models
 */
export async function retrieves_available_transfer_learning_models(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/optimize/transfer-learning-models`, {
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
