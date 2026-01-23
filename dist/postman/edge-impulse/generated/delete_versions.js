/**
 * Delete a version. This does not delete the version from cold storage.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/versions/:versionId
 */
export async function delete_versions(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/versions/:versionId`, {
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
