/**
 * List all files and directories in specified prefix.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId/files
 */
export async function list_files_in_portal(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/portals/:portalId/files`, {
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
