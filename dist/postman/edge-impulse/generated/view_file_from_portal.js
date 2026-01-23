/**
 * View a file that's located in an upload portal (requires JWT auth). Will return a signed URL to the bucket.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId/files/view?path=<string>
 */
export async function view_file_from_portal(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/portals/:portalId/files/view?path=<string>`, {
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
