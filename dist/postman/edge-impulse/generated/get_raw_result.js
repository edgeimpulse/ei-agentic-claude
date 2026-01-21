/**
 * Get performance calibration raw result
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/raw-result
 */
export async function get_raw_result(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/performance-calibration/raw-result`, {
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
