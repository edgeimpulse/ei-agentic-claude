/**
 * Download labels for a DSP block over all data in the training set, already sliced in windows.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/dsp-data/:dspId/y/:category
 */
export async function download_dsp_labels(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/dsp-data/:dspId/y/:category`, {
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
