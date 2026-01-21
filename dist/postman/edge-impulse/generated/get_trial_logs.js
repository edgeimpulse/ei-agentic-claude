/**
 * Get the logs for a trial.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/trial/:trialId/stdout?limit=<integer>&logLevel=<string>
 */
export async function get_trial_logs(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/optimize/trial/:trialId/stdout?limit=<integer>&logLevel=<string>`, {
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
