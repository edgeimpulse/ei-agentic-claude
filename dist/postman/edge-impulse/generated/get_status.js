/**
 * Get performance calibration status
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/status
 */
export async function get_status(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/performance-calibration/status`, {
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
