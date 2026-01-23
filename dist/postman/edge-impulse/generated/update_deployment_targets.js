/**
 * Update some or all of the deployment targets enabled for this white label.
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/deploymentTargets
 */
export async function update_deployment_targets(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/whitelabel/:whitelabelIdentifier/deploymentTargets`, {
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
