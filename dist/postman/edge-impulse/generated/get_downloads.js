/**
 * Retrieve the downloads for a project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/downloads
 */
export async function get_downloads(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/downloads`, {
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
