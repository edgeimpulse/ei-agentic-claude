/**
 * Updates a deploy block. Only values in the body will be updated.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy/:deployId
 */
export async function update_deploy_block(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy/:deployId`, {
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
