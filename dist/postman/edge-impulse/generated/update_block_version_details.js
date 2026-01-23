/**
 * Update the details of a block version
 * Method: PUT
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse/block-versions/:blockType/:blockId
 */
export async function update_block_version_details(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/impulse/block-versions/:blockType/:blockId`, {
        method: 'PUT',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(params), // Uncomment for POST/PUT
    });
    return res.json();
}
