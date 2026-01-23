/**
 * Change the job compute time limit for the project. This function is only available through a JWT token, and is not available to all users.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/:projectId/compute-time-limit
 */
export async function set_compute_time_limit(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/compute-time-limit`, {
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
