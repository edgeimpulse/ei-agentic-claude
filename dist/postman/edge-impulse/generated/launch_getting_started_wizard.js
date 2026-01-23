/**
 * This clears out *all data in your project*, and is irrevocable. This function is only available through a JWT token, and is not available to all users.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/launch-getting-started
 */
export async function launch_getting_started_wizard(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/launch-getting-started`, {
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
