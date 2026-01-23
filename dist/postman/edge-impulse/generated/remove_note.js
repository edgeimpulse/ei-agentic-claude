/**
 * Remove a note from a project.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/notes/:noteId/remove
 */
export async function remove_note(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/notes/:noteId/remove`, {
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
