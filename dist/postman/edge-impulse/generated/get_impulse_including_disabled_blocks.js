/**
 * Retrieve the impulse for this project including disabled blocks
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse/all
 */
export async function get_impulse_including_disabled_blocks(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/impulse/all`, {
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
