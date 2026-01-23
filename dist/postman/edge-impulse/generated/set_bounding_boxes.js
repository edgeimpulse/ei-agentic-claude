/**
 * Set the bounding boxes for a sample
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/bounding-boxes
 */
export async function set_bounding_boxes(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/bounding-boxes`, {
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
