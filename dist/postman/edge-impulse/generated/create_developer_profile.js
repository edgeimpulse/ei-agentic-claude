/**
 * Create a developer profile for the current active user.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/user/create-developer-profile
 */
export async function create_developer_profile(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/user/create-developer-profile`, {
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
