/**
 * Clear all failed transform job from a create project job. Only jobs that have failed will be cleared.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/transform/clear
 */
export async function clear_failed_transform_jobs(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project/:createProjectId/transform/clear`, {
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
