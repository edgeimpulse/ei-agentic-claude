/**
 * Get performance calibration parameter sets
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameter-sets
 */
export async function get_parameter_sets(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/performance-calibration/parameter-sets`, {
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
