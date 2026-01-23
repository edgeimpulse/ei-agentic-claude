/**
 * Create a new version of a given block
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/impulse/block-versions/:blockType/:blockId
 */
export async function create_new_block_version(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/impulse/block-versions/:blockType/:blockId`, {
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
