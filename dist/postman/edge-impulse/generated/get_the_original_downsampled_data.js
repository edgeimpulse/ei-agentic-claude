/**
 * Get the original, uncropped, downsampled data.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/original?limitPayloadValues=<integer>&zoomStart=<integer>&zoomEnd=<integer>
 */
export async function get_the_original_downsampled_data(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/original?limitPayloadValues=<integer>&zoomStart=<integer>&zoomEnd=<integer>`, {
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
