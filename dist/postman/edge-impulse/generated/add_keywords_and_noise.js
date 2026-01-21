/**
 * Add keywords and noise data to a project (for getting started guide)
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/keywords-noise
 */
export async function add_keywords_and_noise(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/keywords-noise`, {
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
