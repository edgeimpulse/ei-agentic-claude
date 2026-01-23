/**
 * List deployment targets for a project from data sources page  (it shows some things like all Linux deploys, and hides 'fake' deploy targets like mobile phone / computer)
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/:projectId/deployment/targets/data-sources
 */
export async function deployment_targets_data_sources(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/:projectId/deployment/targets/data-sources`, {
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
