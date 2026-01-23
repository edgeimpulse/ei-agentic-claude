/**
 * DEPRECATED. Admin-only API to find a user by username or email address.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/admin/find-user?query=<string>
 */
export async function find_a_user(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/admin/find-user?query=<string>`, {
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
