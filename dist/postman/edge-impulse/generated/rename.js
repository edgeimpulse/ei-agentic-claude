/**
 * Set the current name for a device.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/devices/:deviceId/rename
 */
export async function rename(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/devices/:deviceId/rename`, {
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
