/**
 * Create trial
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/:jobId/create-trial
 */
export async function create_trial(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/optimize/:jobId/create-trial`, {
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
