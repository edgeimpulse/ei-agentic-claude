/**
 * Deletes a deploy block.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy/:deployId
 */
export async function delete_deploy_block(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/deploy/:deployId`, {
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
