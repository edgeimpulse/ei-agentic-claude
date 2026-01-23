/**
 * Clears the current performance calibration parameters
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameters
 */
export async function clear_performance_calibration_parameters(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameters`, {
        method: 'DELETE',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(params), // Uncomment for POST/PUT
    });
    return res.json();
}
