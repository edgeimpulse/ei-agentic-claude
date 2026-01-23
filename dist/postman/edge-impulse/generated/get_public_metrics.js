/**
 * Get information about number of projects, compute and data samples. Updated once per hour.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api-metrics
 */
export async function get_public_metrics(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api-metrics`, {
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
