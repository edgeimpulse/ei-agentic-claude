/**
 * Transfer ownership of a project to another organization.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/collaborators/transfer-ownership-org
 */
export async function transfer_ownership_organization(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/collaborators/transfer-ownership-org`, {
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
