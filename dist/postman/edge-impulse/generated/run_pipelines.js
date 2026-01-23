/**
 * Run an organizational pipeline
 * Method: POST
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId/run?ignoreLastSuccessfulRun=<boolean>
 */
export async function run_pipelines(params, apiKey) {
    // TODO: Implement parameter mapping
    const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId/run?ignoreLastSuccessfulRun=<boolean>`, {
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
