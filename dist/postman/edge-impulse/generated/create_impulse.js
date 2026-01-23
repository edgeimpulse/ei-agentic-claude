/**
 * Sets the impulse for this project.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse
 */
export async function create_impulse(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/impulse`, {
        method: 'POST',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(params), // Uncomment for POST/PUT
    });
    return res.json();
}
