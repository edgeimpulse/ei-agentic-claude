/**
 * Retrieves a single device
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/device/:deviceId
 */
export async function get_device(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/device/:deviceId`, {
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
