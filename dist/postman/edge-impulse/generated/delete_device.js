/**
 * Delete a device. When this device sends a new message to ingestion or connects to remote management the device will be recreated.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/device/:deviceId
 */
export async function delete_device(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/device/:deviceId`, {
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
