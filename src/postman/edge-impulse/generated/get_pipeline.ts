/**
 * Retrieve an organizational pipelines
 * Method: GET
 * URL: https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId
 */
export async function get_pipeline(params: any, apiKey: string) {
  // TODO: Implement parameter mapping
  const res = await fetch(`https://studio.edgeimpulse.com/api/organizations/:organizationId/pipelines/:pipelineId`, {
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
