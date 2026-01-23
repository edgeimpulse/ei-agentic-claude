/**
 * Transfer ownership of a project to another user.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/collaborators/transfer-ownership
 */
export async function transfer_ownership_user(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/collaborators/transfer-ownership`, {
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
