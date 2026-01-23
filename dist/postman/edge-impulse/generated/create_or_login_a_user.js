/**
 * Login as a user as a third-party authentication provider. If the user does not exists, it's automatically created. You can only log in as users that were previously created by you.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/third-party-auth/:authId/login
 */
export async function create_or_login_a_user(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/third-party-auth/:authId/login`, {
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
