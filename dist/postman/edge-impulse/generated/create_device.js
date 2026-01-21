/**
 * Create a new device. If you set `ifNotExists` to `false` and the device already exists, the `deviceType` will be overwritten.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/devices/create
 */
export async function create_device(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/devices/create`, {
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
