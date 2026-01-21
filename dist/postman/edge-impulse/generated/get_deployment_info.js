/**
 * Gives information on whether a deployment was already built for a type
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/deployment?type=<string>&modelType=<string>&engine=<string>
 */
export async function get_deployment_info(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/deployment?type=<string>&modelType=<string>&engine=<string>`, {
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
