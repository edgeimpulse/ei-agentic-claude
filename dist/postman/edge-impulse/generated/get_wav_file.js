/**
 * Get the synthetic sample as a WAV file
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/wav
 */
export async function get_wav_file(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/performance-calibration/wav`, {
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
