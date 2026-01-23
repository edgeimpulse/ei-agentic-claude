/**
 * Updates storage bucket details. This only updates fields that were set in the request body.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/:bucketId
 */
export async function update_storage_bucket(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets/:bucketId`, {
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
