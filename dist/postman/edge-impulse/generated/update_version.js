/**
 * Updates a version, this only updates fields that were set in the body.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/versions/:versionId
 */
export async function update_version(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/versions/:versionId`, {
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
