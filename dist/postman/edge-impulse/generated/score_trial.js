/**
 * Score trial
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/score-trial
 */
export async function score_trial(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/optimize/score-trial`, {
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
