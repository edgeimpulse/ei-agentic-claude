/**
 * Remove a storage bucket. This will render any data in this storage bucket unreachable.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/:bucketId
 */
export async function remove_storage_bucket(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/:bucketId`, {
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
