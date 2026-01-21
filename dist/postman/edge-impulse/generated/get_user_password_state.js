/**
 * Tells whether the user needs to set its password.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api-user-need-to-set-password/:usernameOrEmail
 */
export async function get_user_password_state(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api-user-need-to-set-password/:usernameOrEmail`, {
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
