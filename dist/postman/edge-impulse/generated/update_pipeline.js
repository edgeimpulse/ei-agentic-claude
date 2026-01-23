/**
 * Update an organizational pipelines
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId
 */
export async function update_pipeline(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId`, {
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
