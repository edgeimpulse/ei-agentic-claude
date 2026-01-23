/**
 * DEPRECATED. Admin-only API to get list of all users.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/users-ids
 */
export async function get_all_user_ids(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/admin/users-ids`, {
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
