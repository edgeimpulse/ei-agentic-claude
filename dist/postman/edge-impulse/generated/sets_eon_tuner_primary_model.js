/**
 * Sets EON tuner primary model
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/set-tuner-primary-job?trialId=<string>
 */
export async function sets_eon_tuner_primary_model(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/set-tuner-primary-job?trialId=<string>`, {
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
