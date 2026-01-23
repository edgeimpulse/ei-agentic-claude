/**
 * Move multiple samples to another category (e.g. from test to training).
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/batch/moveSamples?category=<string>&labels=<string>&filename=<string>&maxLength=<integer>&minLength=<integer>&minFrequency=<number>&maxFrequency=<number>&signatureValidity=<string>&includeDisabled=<string>&ids=<string>
 */
export async function move_multiple_samples(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/batch/moveSamples?category=<string>&labels=<string>&filename=<string>&maxLength=<integer>&minLength=<integer>&minFrequency=<number>&maxFrequency=<number>&signatureValidity=<string>&includeDisabled=<string>&ids=<string>`, {
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
