/**
 * Download a file from an upload portal (requires JWT auth). Will return a signed URL to the bucket.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId/files/download
 */
export async function download_file_from_portal(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/portals/:portalId/files/download`, {
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
