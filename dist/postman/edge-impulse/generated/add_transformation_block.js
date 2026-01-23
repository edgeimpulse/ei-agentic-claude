/**
 * Adds a transformation block.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/transformation
 */
export async function add_transformation_block(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/transformation`, {
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
