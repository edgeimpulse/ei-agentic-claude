/**
 * Deletes a transfer learning block.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/secrets/:secretId
 */
export async function delete_transfer_learning_block(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/secrets/:secretId`, {
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
