/**
 * Uploads an image to the user CDN and returns the path.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/readme/upload-image
 */
export async function upload_image_for_readme(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/readme/upload-image`, {
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
