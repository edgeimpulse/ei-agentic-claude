/**
 * Remove a collaborator to a project. Note that you cannot invoke this function if only a single collaborator is present.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/collaborators/remove
 */
export async function remove_collaborator(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/collaborators/remove`, {
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
