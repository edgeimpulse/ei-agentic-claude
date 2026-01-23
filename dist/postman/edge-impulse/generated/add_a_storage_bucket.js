/**
 * Add a storage bucket.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets
 */
export async function add_a_storage_bucket(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/buckets`, {
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
