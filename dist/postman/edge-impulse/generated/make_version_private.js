/**
 * Make a public version private.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/versions/:versionId/make-private
 */
export async function make_version_private(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/versions/:versionId/make-private`, {
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
