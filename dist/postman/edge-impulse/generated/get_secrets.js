/**
 * Retrieve all secrets.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/secrets
 */
export async function get_secrets(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/secrets`, {
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
