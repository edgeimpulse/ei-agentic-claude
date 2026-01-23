/**
 * Get raw sample data, but with only the axes selected by the DSP block. E.g. if you have selected only accX and accY as inputs for the DSP block, but the raw sample also contains accZ, accZ is filtered out. If you pass dspId = 0 this will return a raw graph without any processing.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/raw-data/:sampleId?limitPayloadValues=<integer>
 */
export async function get_raw_sample(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/dsp/:dspId/raw-data/:sampleId?limitPayloadValues=<integer>`, {
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
