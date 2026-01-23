/**
 * Crop a sample to within a new range.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/crop
 */
export async function crop_sample(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/crop`, {
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
