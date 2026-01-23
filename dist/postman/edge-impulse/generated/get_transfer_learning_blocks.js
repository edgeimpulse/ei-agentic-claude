/**
 * Retrieve all transfer learning blocks.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/transfer-learning
 */
export async function get_transfer_learning_blocks(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/transfer-learning`, {
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
