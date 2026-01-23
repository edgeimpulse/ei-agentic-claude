/**
 * Track objects between two samples. Source sample should have bounding boxes set.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/track-objects
 */
export async function track_objects(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/track-objects`, {
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
