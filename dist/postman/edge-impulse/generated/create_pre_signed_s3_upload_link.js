/**
 * Creates a signed link to securely upload data to s3 bucket directly from the client.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/portals/:portalId/upload-link
 */
export async function create_pre_signed_s3_upload_link(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/portals/:portalId/upload-link`, {
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
