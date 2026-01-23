/**
 * Get a list of axes that are present in the training data.
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/data-axes?includeDisabled=<boolean>&includeNotProcessed=<boolean>
 */
export async function get_data_axes_summary(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/data-axes?includeDisabled=<boolean>&includeNotProcessed=<boolean>`, {
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
