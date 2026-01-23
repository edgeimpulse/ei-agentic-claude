/**
 * Completely clears the EON tuner state for this project.
 * Method: DELETE
 * URL: https://studio.edgeimpulse.com/api/:projectId/optimize/state
 */
export async function delete_eon_tuner_state(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/optimize/state`, {
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
