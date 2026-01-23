/**
 * Admin-only API to update project properties.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/admin/projects/:projectId
 */
export async function update_project(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/admin/projects/:projectId`, {
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
