/**
 * Retrieve the impulse for this project
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse
 */
export async function get_impulse(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/impulse`, {
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
