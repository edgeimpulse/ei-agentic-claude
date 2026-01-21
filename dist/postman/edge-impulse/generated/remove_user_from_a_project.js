/**
 * Admin-only API to remove a user from a project.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId/members/:userId
 */
export async function remove_user_from_a_project(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/admin/projects/:projectId/members/:userId`, {
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
