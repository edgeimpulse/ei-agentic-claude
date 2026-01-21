/**
 * Delete a user. This function is only available through a JWT token, and can only remove the current user.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/users/:userId
 */
export async function delete_user(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/users/:userId`, {
        method: 'DELETE',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // body: JSON.stringify(params), // Uncomment for POST/PUT
    });
    return res.json();
}
