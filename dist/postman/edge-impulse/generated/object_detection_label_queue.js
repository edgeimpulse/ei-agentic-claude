/**
 * Get all unlabeled items from the object detection queue.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/label-object-detection-queue
 */
export async function object_detection_label_queue(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/label-object-detection-queue`, {
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
