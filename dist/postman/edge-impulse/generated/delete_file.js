/**
 * Delete a single file from a data item.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId/download?fileName=<string>
 */
export async function delete_file(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/data/:dataId/download?fileName=<string>`, {
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
