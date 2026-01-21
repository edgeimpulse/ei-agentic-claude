/**
 * Get the URL to the exported artefacts for an export job of a project.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/export/get-url
 */
export async function get_url_of_export(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/export/get-url`, {
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
