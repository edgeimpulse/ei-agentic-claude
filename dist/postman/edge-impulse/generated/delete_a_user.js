/**
 * Admin-only API to delete a user. If `fullDeletion` is set, it deletes the user's identifiable information and files. Otherwise, it soft deletes the user by setting it's `delete_date` value.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/admin/users/:userId?fullDeletion=<boolean>
 */
export async function delete_a_user(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/admin/users/:userId?fullDeletion=<boolean>`, {
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
