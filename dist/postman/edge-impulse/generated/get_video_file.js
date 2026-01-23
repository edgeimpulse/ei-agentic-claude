/**
 * Get a sample as an video file. This only applies to samples with video data.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/video?afterInputBlock=<boolean>
 */
export async function get_video_file(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/:sampleId/video?afterInputBlock=<boolean>`, {
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
