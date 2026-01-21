/**
 * Admin-only API to get marketing metrics about a user.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/users/:userId/metrics
 */
export async function get_user_metrics(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/admin/users/:userId/metrics`, {
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
