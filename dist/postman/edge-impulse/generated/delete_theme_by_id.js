/**
 * Delete a theme given its unique identifier.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/themes/:themeId
 */
export async function delete_theme_by_id(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/themes/:themeId`, {
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
