/**
 * Uploads and updates the organization header image
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/header
 */
export async function upload_organization_header_image(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/header`, {
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
