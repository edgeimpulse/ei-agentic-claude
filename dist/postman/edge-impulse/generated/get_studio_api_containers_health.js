/**
 * Get studio api containers health.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/api-health?requester=<string>
 */
export async function get_studio_api_containers_health(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/api-health?requester=<string>`, {
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
