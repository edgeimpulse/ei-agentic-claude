/**
 * Get list of transformation jobs.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project?limit=<integer>&offset=<integer>
 */
export async function list_transformation_jobs(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/create-project?limit=<integer>&offset=<integer>`, {
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
