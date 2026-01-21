/**
 * Restore a project to a certain version. This can only applied to a project without data, and will overwrite your impulse and all settings.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/jobs/restore
 */
export async function restore_project_to_version(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/jobs/restore`, {
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
