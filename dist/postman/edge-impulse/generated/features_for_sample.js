/**
 * Runs the DSP block against a sample. This will move the sliding window (dependent on the sliding window length and the sliding window increase parameters in the impulse) over the complete file, and run the DSP function for every window that is extracted.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/get-graph/classification/:sampleId
 */
export async function features_for_sample(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/features/get-graph/classification/:sampleId`, {
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
