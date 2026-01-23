/**
 * Remove the current data explorer state
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/clear
 */
export async function clear_data_explorer(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/raw-data/data-explorer/clear`, {
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
